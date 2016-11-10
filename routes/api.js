const express = require('express');
const router = express.Router();
const knex = require('../knex.js')
const bcrypt = require('bcrypt')

/* GET home page. */
router.get('/allposts', function(req, res, next) {
  // console.log('all posts works');
  knex('posts').innerJoin('users', 'posts.user_id', 'users.id')
    .then(function(results) {
      // console.log(results);
      res.json(results)
    })
});


module.exports = router;
