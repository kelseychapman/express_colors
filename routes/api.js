const express = require('express');
const router = express.Router();
const knex = require('../knex.js')
const bcrypt = require('bcrypt')

/* GET home posts and comments from database. */
router.get('/allposts', function(req, res, next) {
  // console.log('all posts works');
  knex('posts')
    .innerJoin('users', 'posts.user_id', 'users.id')
    .select('posts.id as id', 'username', 'title', 'description', 'img', 'votes', 'user_id', 'comments')
    .then(function(posts) {
      // console.log(results);
      knex('comments')
      .innerJoin('users', 'comments.user_id', 'users.id')
      .select('comments.id as id', 'post_id', 'username', 'description')
      .then((comments) => {
        for (var i = 0; i < comments.length; i++) {
          var index = comments[i].post_id - 1;
          posts[index].comments.push(comments[i])
        }  res.json(posts);
      })
      // console.log(posts);

    })
});



router.post('/newpost', function(req, res, next) {
  if (!req.session.userInfo ){
    console.log('Not authorized');
  } else {
    knex('posts')
    .returning('*')
    .insert({
      user_id: req.session.userInfo.id,
      title: req.body.title,
      body: req.body.description,
      img: req.body.image,
      voteCount: 1
    }).then(function(results) {
      res.send(results)
    })
  }
})

module.exports = router;
