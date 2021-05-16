import {
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk';

const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_APP_CLIENT_ID,
};

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const userPool = new CognitoUserPool(poolData);

const CognitoIdentityServiceProvider = AWS.CognitoIdentityServiceProvider;

const cognitoClient = new CognitoIdentityServiceProvider({
  apiVersion: '2016-04-19',
  region: process.env.AWS_REGION,
});

const verifyEmail = async (username) => {
  cognitoClient.adminUpdateUserAttributes(
    {
      UserAttributes: [
        {
          Name: 'email_verified',
          Value: 'true',
        },
      ],
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: username,
    },
    (err) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    }
  );
};

export { userPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser, verifyEmail };
