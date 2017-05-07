'use strict';

const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};

module.exports.list = (event, context, callback) => {
  // fetch all contacts from the database
  dynamoDb.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the contacts.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "http://localhost:3000",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
