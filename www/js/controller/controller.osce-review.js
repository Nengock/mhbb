(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('OsceReviewController', OsceReviewController);

  function OsceReviewController($state, $stateParams) {
    var vm = this;

    vm.attempt = $stateParams.attempt;
    vm.correct = $stateParams.correct;
    vm.incorrect = $stateParams.incorrect; 
    vm.mandatories = $stateParams.mandatories;

    vm.passed = vm.correct.length>9 && vm.mandatories[0]&& vm.mandatories[1]&& vm.mandatories[2];

    vm.retake = function() {
      $state.go('osce-check', {
        attempt: vm.attempt + 1
      });
    };

    vm.close = function() {
      $state.go('tab.lessons');
    };
  }
})();