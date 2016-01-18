(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('RegisterController', RegisterController);

  function RegisterController($state, api) {
    var vm = this;

    vm.register = register;

    function register() {
      var data = {
        email: vm.email,
        givenName: vm.givenName,
        familyName: vm.familyName
      };
      api.request('POST', 'user', data)
        .then(function(data) {
          if (data.uuid) {
            localStorage.setItem('user', data.uuid);
            $state.go('tab.dashboard');
          }
        });
    }
  }
})();