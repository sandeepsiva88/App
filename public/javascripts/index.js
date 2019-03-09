// Code goes here
var myApp = angular.module('myApp', []);
myApp.controller('studentController', ['$scope', '$http', function($scope, $http) {

  //Buttons Settings
  $scope.submit = true;
  $scope.update = false;
  $scope.cancel = false;
  $scope.userid = true;

  //Getting Users List
  //$http GET function
  $http({
    method: 'GET',
    url: 'getuser'

  }).then(function successCallback(response) {

    $scope.users = response.data;

  }, function errorCallback(response) {

    alert("Error. Try Again!");

  });


  //Create New User
  $scope.createUser = function() {

    //$http POST function
    $http({

      method: 'POST',
      url: 'postuser',
      data: $scope.user

    }).then(function successCallback(response) {

      $scope.users.push(response.data);
      alert("User has created Successfully")

    }, function errorCallback(response) {

      alert("Error. while created user Try Again!");

    });

  };


  //Update User
  $scope.updateUser = function() {

    //$http PUT function
    $http({

      method: 'PUT',
      url: '/edit/' + $scope.user._id,
      data: $scope.user

    }).then(function successCallback(response) {
      
      alert("User has updated Successfully")

    }, function errorCallback(response) {

      alert("Error. while updating user Try Again!");

    });

  };


  //Delete User
  $scope.deleteUser = function(user) {

    //$http DELETE function
    $http({

      method: 'DELETE',
      url: '/delete/' + user._id

    }).then(function successCallback(response) {

      alert("User has deleted Successfully");
      var index = $scope.users.indexOf(user);
      $scope.users.splice(index, 1);

    }, function errorCallback(response) {

      alert("Error. while deleting user Try Again!");

    });

  };

  //Set $scope on Edit button click
  $scope.editUser = function(user) {

    $scope.user = user;
    $scope.submit = false;
    $scope.update = true;
    $scope.cancel = true;
    $scope.userid = false;

  };


  //cancel Uodate
  $scope.cancelUpdate = function() {
    $scope.user = null;
    $scope.submit = true;
    $scope.update = false;
    $scope.cancel = false;
    $scope.userid = true;
  };

}]);