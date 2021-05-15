import {
  userPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from '../config/cognito.config';
import { validatePassword, validateUsername } from '../utils/auth.utils';

const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    validateUsername(username);
    validatePassword(password);

    const attributeList = [];
    attributeList.push(new CognitoUserAttribute({ Name: 'email', Value: email }));

    userPool.signUp(username, password, attributeList, null, (error) => {
      if (error) {
        console.log(error);
        res.status(400).json(error);
      }
      res.status(200);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
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

export { signUp, signIn };
