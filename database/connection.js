const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '',
    user: '',
    password: '',
    database: ''
  }
})

export default knex
