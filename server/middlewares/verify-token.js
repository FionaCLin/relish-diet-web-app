import AWS from 'aws-sdk';
import config from '../config/config.js';

AWS.config.update({
  region: config.cognito.REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: config.cognito.USER_POOL_ID,
  }),
});

// mandatorySignId: true,
// region: config.cognito.REGION,
// userPoolId: config.cognito.USER_POOL_ID,
// userPoolWebClientId: config.cognito.APP_CLIENT_ID,
const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

export default async function authorize(request, res, next) {
  console.log('Request Type:', request.method);

  const accessToken = request.headers.authorization.split(' ')[1];
  console.log('accessToken', accessToken);
  cognitoidentityserviceprovider.getUser({AccessToken: accessToken}, function (error, data) {
    if (error) {
      console.log(`error:${error.stack}`);
      return res.code(401).send();
    }
    console.log('-------------cognito.getUser-----------');
    // console.log('cognito.getUser result : ' + JSON.stringify(data)); // successful response
    next();
  });
}
