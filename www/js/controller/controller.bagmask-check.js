(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('BagMaskCheckController', BagMaskCheckController);

  function BagMaskCheckController($scope, $state, $stateParams, api, bagMaskCheck) {
    var vm = this;

    $scope.$on('$ionicView.enter', function() {
      vm.attempt = $stateParams.attempt || 1;

      vm.correct = $stateParams.correct;
      vm.incorrect = $stateParams.incorrect;
      vm.members = $stateParams.incorrect;

      vm.counter = 0;
      vm.selectedOption = null;
      vm.selectedOptions = [];

      if (vm.members && vm.members.length > 0) {
        vm.question = bagMaskCheck.getQuestion(vm.members[vm.counter]);
      } else {
        vm.members = bagMaskCheck.getQuestions();
        vm.question = bagMaskCheck.getQuestion(vm.members[vm.counter]);
      }
    });

    vm.displayNext = function() {
      return vm.members && vm.selectedOption;
    };

    vm.finalQuestion = function() {
      return vm.members && vm.counter === vm.members.length - 1;
    };

    vm.displayPrevious = function() {
      return vm.counter > 0;
    };

    vm.optionSelected = function() {
      // save the current selection
      vm.selectedOptions[vm.counter] = vm.selectedOption;
    };

    vm.nextQuestion = function() {
      if (vm.selectedOption) {
        // save the current selection
        vm.selectedOptions[vm.counter] = vm.selectedOption;
        if (vm.counter < vm.members.length - 1) {
          // move forward
          vm.counter++;
          // set the selection if available
          vm.selectedOption = vm.selectedOptions[vm.counter];
          vm.question = bagMaskCheck.getQuestion(vm.members[vm.counter]);
        } else {
          var answers = [];
          for (var i = 0; i < vm.selectedOptions.length; i++) {
            var answer = vm.selectedOptions[i];
            var question = vm.members[i];
            answers.push({
              answer: answer,
              question: question
            })
          }

          var validated = bagMaskCheck.validate(answers);
          $state.go('bagmask-review', {
            attempt: vm.attempt,
            correct: validated.correct.concat(vm.correct),
            incorrect: validated.incorrect
          });
        }
      }
    };

    vm.previousQuestion = function() {
      if (vm.counter > 0) {
        vm.counter--;
        vm.question = bagMaskCheck.getQuestion(vm.members[vm.counter]);
        var hashCode = vm.selectedOptions[vm.counter];
        for (var i = 0; i < vm.question.questionOptions.length; i++) {
          var optionHashCode = vm.hashCode(vm.question.questionOptions[i]);
          if (optionHashCode === hashCode) {
            vm.selectedOption = optionHashCode;
          }
        }
      }
    };

    vm.hashCode = function(value) {
      var hash = 0, i, chr, len;
      if (value.length === 0) return hash;
      for (i = 0, len = value.length; i < len; i++) {
        chr = value.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
      }
      return hash;
    };
  }
})();