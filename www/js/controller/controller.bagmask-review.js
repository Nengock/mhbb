(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('BagMaskReviewController', BagMaskReviewController);

  function BagMaskReviewController($state, $stateParams) {
    var vm = this;

    vm.score = $stateParams.score;
    vm.attempt = $stateParams.attempt;

    vm.retake = function() {
      $state.go('bagmask-check', {
        attempt: vm.attempt + 1
      });
    };

    vm.close = function() {
      $state.go('tab.lessons');
    };
  }
})();