"use strict";


module.exports.signup = async event => {

  let payload = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: payload,
        event: event
      },
      null,
      2
    )
  };
};
