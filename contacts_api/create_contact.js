'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      first_name: data.first_name,
      last_name: data.first_name,
      dob: data.dob,
      phone: data.phone,
      email: data.email,
      address: data.address,
      notes: data.notes,
      createdAt: timestamp,
      updatedAt: timestamp
    },
  };

  // write the contact to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t create contact.'));
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
