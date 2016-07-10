angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

vm.signup = function() {
    $ionicLoading.show();
    Stamplay.User.signup(vm.user)
    .then(function(user) {
      $rootScope.user = user;
      $state.go("tab.dash");
    }, function(error) {
      errorHandler({
        title : "<h4>A Valid Email and Password is Required</h4>"
      })
      $ionicLoading.hide();
    })
}

.controller('SignUpCtrl', function($scope, SignupService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.signup = function() {
        SignupService.signupUser($scope.data.name, $scope.data.username), $scope.data.pa.success(function(data) {
            $state.go('tab.dash');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'SignUp failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});



  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
