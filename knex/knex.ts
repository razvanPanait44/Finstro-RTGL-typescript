const environment = process.env.ENVIRONMENT || 'development'
export const config = require('../knexfile.ts')[environment];