(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LessonDetailController', LessonDetailController);

  function LessonDetailController($scope, $state, $stateParams, api) {
    var vm = this;

    $scope.$on('$ionicView.enter', function() {
      vm.uuid = $stateParams.uuid;
      vm.correct = $stateParams.correct;
      vm.incorrect = $stateParams.incorrect;
      vm.members = $stateParams.incorrect;

      vm.counter = 0;
      vm.selectedOption = null;
      vm.selectedOptions = [];

      api.request('GET', 'questions/' + vm.uuid)
        .then(function(metadata) {
          vm.metadata = metadata;
        });

      if (vm.members && vm.members.length > 0) {
        api.request('GET', 'question/' + vm.members[vm.counter])
          .then(function(question) {
            vm.question = question;
          });
      } else {
        api.request('GET', 'questions/' + vm.uuid + '/members')
          .then(function(members) {
            vm.members = members;
            if (vm.members && vm.members.length > 0) {
              api.request('GET', 'question/' + vm.members[vm.counter])
                .then(function(question) {
                  vm.question = question;
                });
            }
          });
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
          api.request('GET', 'question/' + vm.members[vm.counter])
            .then(function(question) {
              vm.question = question;
            });
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

          api.request('POST', 'questions/validate', {answers: answers})
            .then(function(data) {
              $state.go('review', {
                uuid: vm.uuid,
                correct: data.correct.concat(vm.correct),
                incorrect: data.incorrect
              });
            });
        }
      }
    };

    vm.previousQuestion = function() {
      if (vm.counter > 0) {
        vm.counter--;
        api.request('GET', 'question/' + vm.members[vm.counter])
          .then(function(question) {
            vm.question = question;
            var hashCode = vm.selectedOptions[vm.counter];
            for (var i = 0; i < vm.question.options.length; i++) {
              var optionHashCode = vm.hashCode(vm.question.options[i]);
              if (optionHashCode === hashCode) {
                vm.selectedOption = optionHashCode;
              }
            }
          })
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
    }
  }
})();