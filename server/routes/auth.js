const express = require('express')

const {userExists, createUser} = require('../db/users')

const router = express.Router()

router.post('/register', register)

function register (req, res) {
  userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      createUser(req.body.username, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
  // TODO: make sure username doesn't already exist
  // TODO: if not, hash the password and add the user to the database
}

module.exports = router
