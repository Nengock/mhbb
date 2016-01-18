(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('ReviewController', ReviewController);

  function ReviewController($state, $stateParams) {
    var vm = this;
    vm.uuid = $stateParams.uuid;

    vm.correct = $stateParams.correct;
    vm.incorrect = $stateParams.incorrect;

    vm.retakeIncorrect = function() {
      $state.go('tab.lesson-detail', {
        uuid: vm.uuid,
        correct: vm.correct,
        incorrect: vm.incorrect
      });
    };

    vm.retake = function() {
      $state.go('tab.lesson-detail', {
        uuid: vm.uuid
      });
    };

    vm.close = function() {
      $state.go('tab.lessons');
    };
  }
})();