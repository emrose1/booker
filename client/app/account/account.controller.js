'use strict';

angular.module('fitbookerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  })

  .controller('AccountCtrl', ['$rootScope', '$scope', 'Account',
    function($rootScope, $scope, Account) {

    $scope.account = new Account();

    var getAccounts = function () {
      Account.query({}, function(data) {
        $scope.accounts = data;
        //$scope.setAccount(data[0].id);
      });
    };

    getAccounts();

    $scope.newAccount = function() {
      $scope.account = new Account();
      $scope.editing = false;
    };

    $scope.activeAccount = function(account) {
      $scope.account = account;
      $scope.editing = true;
      //$scope.setAccount(account.id);
    };

    $scope.save = function(account) {
      if (account._id) {
        account.$update().then(function(){
          getAccounts();
        });
      } else {
      $scope.account.$save().then(function(response) {
        getAccounts();
      });
      }
      $scope.newAccount();
    };

    $scope.delete = function(account) {
      account.$delete(function(){
        getAccounts();
      });
    };

    $scope.setAccount = function(account) {
      //session.setAccount(account);
      $scope.selectedAccount = account;
      $scope.$emit('accountLoaded', {});
    };

  }
]);

