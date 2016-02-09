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
    }, {
      uuid: '15f9dd6f-8668-4906-9b01-0d5f31749161',
      path: 'bagmask-check',
      name: 'Bag Mask Ventilation Skills',
      description: 'Select the best answer to each question or statement.'
    }, {
      uuid: '4464ee76-b51b-4543-ab72-bfd848552ecb',
      path: 'osce-check',
      name: 'OSCE Station A',
      description: 'Select the best answer to each question or statement.'
    }, {
      uuid: 'b4723570-ccac-4fb2-add3-474a177a376f',
      path: 'delivery-check',
      name: 'Delivery Observation Checklist',
      description: 'Select the best answer to each question or statement.'
    }];
  }
})();