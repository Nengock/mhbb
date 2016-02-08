(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('KnowledgeReviewController', KnowledgeReviewController);

  function KnowledgeReviewController($state, $stateParams) {
    var vm = this;

    vm.correct = $stateParams.correct;
    vm.incorrect = $stateParams.incorrect;

    vm.retakeIncorrect = function() {
      $state.go('knowledge-check', {
        correct: vm.correct,
        incorrect: vm.incorrect
      });
    };

    vm.retake = function() {
      $state.go('knowledge-check');
    };

    vm.close = function() {
      $state.go('tab.lessons');
    };
  }
})();