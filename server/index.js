import express from 'express';
import router from './routes/index.js'
import bodyParser from 'body-parser';
import cors from 'cors';

import Amplify from '@aws-amplify/core'
import {default as config} from "./config/config.js";

Amplify.default.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});

const app = express()
const port = 8080

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors());

// use the router and 401 anything falling through
app.use('/', router, function (req, res) {
  res.sendStatus(401)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})