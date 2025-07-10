require('dotenv').config()

const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    region : 'us-east-1',
    accessKeyId : process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY
})

module.export = s3