const connection = require('knex')
const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists
}

function createUser (username, password, conn) {
  const passwordHash = hash.generate(password)
  const db = conn || connection
  return db('users')
    .insert({username, hash: passwordHash})
}

function userExists (username, conn) {
  const db = conn || connection
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}