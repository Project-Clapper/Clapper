import {
  userPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
  verifyEmail,
} from '../config/cognito.config';
import axios from 'axios';
import { dynamoClient } from '../config/dynamodb.config';
import { validatePassword, validateUsername } from '../utils/auth.utils';
import { handleThrow } from '../utils/throw.utils';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    validateUsername(username);
    validatePassword(password);

    const params = {
      TableName: 'ClapperUser',
      FilterExpression: 'username = :username',
      ExpressionAttributeValues: {
        ':username': username,
      },
    };
    const { Count } = await dynamoClient.scan(params).promise();

    if (Count)
      return handleThrow(
        'UsernameAlreadyUsedException',
        'UsernameAlreadyUsedException',
        'Username already used.'
      );

    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));
    // attributeList.push(new CognitoUserAttribute({ Name: 'email_verified', Value: 'true' }));

    userPool.signUp(username, password, attributeList, null, async (error, result) => {
      if (error) {
        console.log(error);
        return res.status(400).json(error);
      }

      verifyEmail(username);

      const userItem = {
        username: result.user.username,
        clientId: result.user.pool.clientId,
      };

      const params = {
        TableName: 'ClapperUser',
        Item: userItem,
      };

      await dynamoClient.put(params).promise();
      res.sendStatus(200);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    validateUsername(username);
    validatePassword(password);

    const authDetails = new AuthenticationDetails({ Username: username, Password: password });
    const cognitoUser = new CognitoUser({ Username: username, Pool: userPool });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        const accessToken = result.getAccessToken().getJwtToken();
        const idToken = result.getIdToken().getJwtToken();
        const refreshToken = result.getRefreshToken().getToken();
        res.status(200).json({ accessToken, idToken, refreshToken });
      },
      onFailure: (error) => {
        console.log(error);
        res.status(400).json(error);
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const me = async (req, res) => {
  try {
    const { token } = req.query;

    const { data } = await axios.get(
      `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}/.well-known/jwks.json`
    );

    const pems = {};
    const { keys } = data;
    keys.forEach((key) => {
      const { kid, n, e, kty } = key;
      const jwk = { kty, n, e };
      const pem = jwkToPem(jwk);
      pems[kid] = pem;
    });

    const decodedJwt = jwt.decode(token, { complete: true });
    if (!decodedJwt) {
      return handleThrow('InvalidTokenException', 'InvalidTokenException', 'Invalid Token.');
    }

    const kid = decodedJwt.header.kid;
    const pem = pems[kid];
    if (!pem)
      return handleThrow('InvalidTokenException', 'InvalidTokenException', 'Invalid Token.');

    jwt.verify(token, pem, { algorithms: ['RS256'] }, async (error, decodedToken) => {
      if (error) handleThrow('InvalidTokenException', 'InvalidTokenException', 'Invalid Token.');
      const { 'cognito:username': username } = decodedToken;

      const params = {
        TableName: 'ClapperUser',
        FilterExpression: 'username = :username',
        ExpressionAttributeValues: {
          ':username': username,
        },
      };

      const { Items } = await dynamoClient.scan(params).promise();
      res.status(200).json(Items[0]);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export { signUp, signIn, me };
