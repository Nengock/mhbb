(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('RegisterController', RegisterController);

  function RegisterController($state, localStorage) {
    var vm = this;

    vm.register = register;

    function register() {
      var data = {
        email: vm.email,
        givenName: vm.givenName,
        familyName: vm.familyName
      };

      var users = JSON.parse(localStorage.get('users') || []);
      users.push(data);
      localStorage.set('users', JSON.stringify(users));

      $state.go('tab.dashboard');
    }
  }
})();