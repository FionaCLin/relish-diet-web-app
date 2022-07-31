import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import Amplify from '@aws-amplify/core';
// import authorize from '../middlewares/verify-token.js';

import router from './routes/index.js';
import config from './config/config.js';
import * as OpenApiValidator from 'express-openapi-validator';

// Amplify.default.configure({
//   Auth: {
//     mandatorySignId: true,
//     region: config.cognito.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID,
//   },
// });


export const setServer = () => {
  const app = express();
  const port = process.env.NODE_ENV === 'test' ? 8081 : 8080;

  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  app.use(cors());
  // app.use(authorize);
  app.use(
    OpenApiValidator.middleware({
      apiSpec: './openapi.yaml',
      validateRequests: true, // (default)
    }),
  );

  // use the router and 401 anything falling through
  app.use('/', router, (request, response) => {
    response.sendStatus(401);
  });

  return app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
};
