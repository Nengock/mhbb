(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LessonsController', LessonsController);

  function LessonsController() {
    var vm = this;

    vm.elements = [{
      uuid: '15f9dd6f-8668-4906-9b01-0d5f31749161',
      path: 'knowledge-check',
      name: 'Knowledge Check',
      description: 'Select the best answer to each question or statement.'
    }];
  }
})();