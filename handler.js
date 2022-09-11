const serverlessExpress = require('@vendia/serverless-express')
const app = require('./src/app')
exports.handler = serverlessExpress({ app })
