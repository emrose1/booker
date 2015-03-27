 'use strict';

angular.module('app')

.controller('AccountCtrl', ['$scope', 'Account',
  function($scope, Account) {

    var vm = this;

    vm.account = new Account();

    var getAccounts = function () {
      Account.query({}, function(data) {
        vm.accounts = data;
        vm.setAccount(data[0]._id);
      });
    };

    getAccounts();

    vm.newAccount = function() {
      vm.account = new Account();
      vm.editing = false;
    };

    vm.activeAccount = function(account) {
      vm.account = account;
      vm.editing = true;
      vm.setAccount(account.id);
    };

    vm.save = function(account) {
      if (account._id) {
        account.$update().then(function(){
          getAccounts();
        });
      } else {
      vm.account.$save().then(function() {
        getAccounts();
      });
      }
      vm.newAccount();
    };

    vm.delete = function(account) {
      account.$delete(function(){
        getAccounts();
      });
    };

    vm.setAccount = function(account) {
      vm.selectedAccount = account;
    };

  }
]);

