app.service('postsService', function($http) {
  return {
    getPosts: function() {
      // console.log('the getPosts is being called');
      return $http.get('/api/allposts').then(function(response) {
        // console.log(response.data)
        return response.data

      })
    },
    newPost: function(post) {
      return $http.post('/api/newpost', post).then(function(response) {
        return response.data
      })
    }
  }
})
