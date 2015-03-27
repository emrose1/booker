'use strict';

angular.module('app')
  .controller('SignupCtrl', function ($scope, Auth, $location, $window, Account) {
    $scope.user = {};
    $scope.errors = {};

    Account.query({}, function(data) {
      $scope.accounts = data;
      $scope.user.account = data[0]._id;
    });

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
          account: $scope.user.account,
          username: $scope.user.email + '@' + $scope.user.account
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
