app.controller('MainController', ['$scope','$log', 'postsService', function($scope,$log, postsService){


// $scope.view.search = ''

// var newObject = {
//   firstName: 'Kelsey',
//   saysHi: function(){
//     console.log('hello');
//   }
// }
// newObject.saysHi()

//*************************************************************************
//get posts from database
postsService.getPosts().then(function(response){
// console.log(posts);
  $scope.posts = response;
})


//*************************************************************************
//drop down sorting menu in nav
$scope.sort = {
		method: '-votes',
		sortName: 'Votes'
	}

$scope.sortByVotes = function() {
	$scope.sort = {
				method: '-votes',
				sortName: 'Votes'
			}
		}

$scope.sortByDate = function() {
	$scope.sort = {
		method: '-date',
		sortName: 'Date'
	}
}
$scope.sortByTitle = function() {
	$scope.sort = {
		method: 'title',
		sortName: 'Title'
	}
}


  $scope.sortBy = function(input) {
    $scope.sortType = input;
    if (input == '-voteCount') {
      $scope.sortDisplay = 'Votes'
    } else {
      $scope.sortDisplay = 'Title'
    }
  }



//*************************************************************************
//show new post form
  $scope.changeBool = function() {
    if (!$scope.postFormBool) {
      $scope.postFormBool = true;
    } else {
      $scope.postFormBool = false;
    }
  }


//*************************************************************************
//post valid results from form into a new object and clear after sumbmitted

$scope.newPost = function(obj) {
  console.log('hey i am cool');
  postsService.newPost(obj).then(function(results) {
    $scope.posts = results;
    $scope.postFormBool = false
    $scope.postForm.$setPristine()
  })
}


//*************************************************************************
//toggle form for submitting a post
// $scope.formShow = function() {
// 	if ($scope.postFormVisible === false) {
// 		$scope.postFormVisible = true;
// 	} else {
// 		$scope.postFormVisible = false;
// 	}
// }

//*************************************************************************
//upvotes and down votes
$scope.upvotePost = function(post) {
  post.votes++;
}

$scope.downvotePost = function(post) {
  post.votes--;
}


//*************************************************************************
	//upvotes and down votes
	$scope.upvotePost = function(post) {
    post.votes++;
  }

  $scope.downvotePost = function(post) {
    post.votes--;
  }



//*************************************************************************
//comments section in posts
$scope.commentShow = function(post) {
	if (post.commentsVisible === false) {
	  post.commentsVisible = true;
	} else {
	  post.commentsVisible = false;
	}
}

$scope.toggleCommentForm = function(post) {
    if (post.commentFormVisible === false) {
      post.commentFormVisible = true;
    } else {
      post.commentFormVisible = false;
    }
  }

	$scope.addComment = function(post, commentForm) {
    if (commentForm.$valid) {
      let comment = {
        author: $scope.commentAuthor,
        text: $scope.commentText
      }
      post.comments.push(comment);
      $scope.toggleCommentForm(post);
      $scope.commentShow(post);
      commentForm.$setPristine();
      $scope.commentAuthor = '';
      $scope.commentText = '';
    }
  }
}]);


// auth
app.controller('auth', function($scope, $cookies, authService) {

  $scope.userObj = {}

  $scope.signup = function(obj) {
    authService.signup(obj).then(function(response) {})
  }

  $scope.login = function(obj) {
    authService.login(obj).then(function(response) {})
  }

})
