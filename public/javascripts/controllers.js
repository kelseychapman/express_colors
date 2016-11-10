app.controller('MainController', ['$scope','$log', 'postsService', function($scope,$log, postsService){

// $scope.view.search = ''

// var newObject = {
//   firstName: 'Kelsey',
//   saysHi: function(){
//     console.log('hello');
//   }
// }
// newObject.saysHi()

postsService.getPosts().then(function(response){
// console.log(posts);
  $scope.posts = response;

})

	$scope.formHandler = function() {
	if ($scope.newPost.$valid) {
		let post = {
			image: $scope.newPost.postImageUrl.$modelValue,
			title: $scope.newPost.postTitle.$modelValue,
			upvotes: 0,
			author: $scope.newPost.postAuthor.$modelValue,
			body: $scope.newPost.postBody.$modelValue,
			date: Date.now(),
			comments : []
		}
		$scope.posts.push(post);
		$scope.newPost.$setPristine();
	}
}

//drop down sorting menu in nav
$scope.sort = {
		method: '-upvotes',
		sortName: 'Votes'
	}

$scope.sortByVotes = function() {
	$scope.sort = {
				method: '-upvotes',
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

//toggle form for submitting a post
$scope.showForm = false
$scope.toggleForm = function (){
	// $log.info('before', $scope.showForm);
		$scope.showForm = !$scope.showForm
			// $log.info('after', $scope.showForm);
}

$scope.formShow = function() {
	if ($scope.postFormVisible === false) {
		$scope.postFormVisible = true;
	} else {
		$scope.postFormVisible = false;
	}
}


	//upvotes and down votes
	$scope.upvotePost = function(post) {
    post.upvotes++;
  }

  $scope.downvotePost = function(post) {
    post.upvotes--;
  }


//comment show
$scope.commentShow = function(post) {
	if (post.commentsVisible === false) {
	  post.commentsVisible = true;
	} else {
	  post.commentsVisible = false;
	}
}

//add new comment showForm$scope.commentShow = function(post) {
$scope.newCommentShow = function(post) {
	if (post.newCommentsVisible === false) {
	  post.newCommentsVisible = true;
	} else {
	  post.newCommentsVisible = false;
	}
}



//comments
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
