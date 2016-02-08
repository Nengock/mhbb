(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LookupController', LookupController);

  function LookupController($state, _, localStorage) {
    var vm = this;

    vm.lookup = lookup;
    vm.register = register;

    function lookup() {
      var users = JSON.parse(localStorage.get('users') || []);
      var user = _.find(users, function(user) {
        if (user.email === vm.email) {
          return user;
        }
      });

      if (user) {
        $state.go('tab.dashboard');
      }
    }

    function register() {
      $state.go('register');
    }
  }
})();