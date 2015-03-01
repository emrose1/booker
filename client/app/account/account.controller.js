 'use strict';

angular.module('fitbookerApp')

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
      $scope.account.$save().then(function() {
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

