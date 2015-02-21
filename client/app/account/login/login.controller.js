'use strict';

angular.module('fitbookerApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, Account) {
    $scope.user = {};
    $scope.errors = {};

    Account.query({}, function(data) {
      $scope.accounts = data;
      $scope.user.account = data[0]._id;
    });

    $scope.login = function(form) {
      $scope.submitted = true;
      console.log($scope.user);

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password,
          account: $scope.user.account
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
