(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('bagMaskCheck', bagMaskCheck);

  function bagMaskCheck(_) {

    var questions = [{
      "questionUuid": "15f9dd6f-8668-4906-9b01-0d5f31749161",
      "questionText": "Type of HBB Training:",
      "questionOptions": [
        "Initial",
        "Refresher"
      ]
    }, {
      "questionUuid": "1cc60a7f-3abe-4afd-a4e9-4c00e6b5cb9a",
      "questionText": "Check equipment and select the correct mask.",
      "questionDescription": "Test function of bag and mask.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "e05090bd-da12-46c6-99f6-feacb2d21f88",
      "questionText": "Check equipment and select the correct mask.",
      "questionDescription": "Make sure mask fits the baby’s face.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "6f0b9189-63a0-4cb6-8d4d-e2ddd09719e4",
      "questionText": "Apply the mask to make a firm seal.",
      "questionDescription": "Extend the head, place mask on the chin, then over the mouth and nose.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "3568df68-cb1c-4f40-9b78-a50325e6d772",
      "questionText": "Apply the mask to make a firm seal.",
      "questionDescription": "A firm seal permits chest movement when the bag is squeezed.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "c273fb21-0e7d-40da-b300-13cd9e241556",
      "questionText": "Apply the mask to make a firm seal.",
      "questionDescription": "Extend the head, place mask on the chin, then over the mouth and nose.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "0e2772c6-20fc-4d03-94ce-efbfb1c1a12f",
      "questionText": "Ventilate at 40 breaths per minute.",
      "questionDescription": "The rate should not be less than 30 or more than 50 breaths per minute.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "7a9fea9b-44c9-4adc-8b92-65cd0692c682",
      "questionText": "Look for chest movement.",
      "questionDescription": "Check that every ventilation breath produces chest movement.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "4f784e15-7706-4f44-991d-4f78005f5a69",
      "questionText": "Improve ventilation if the chest does not move.",
      "questionDescription": "Head – reapply mask and reposition head.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "610f30b8-a929-4448-ac42-3c52d4a73757",
      "questionText": "Improve ventilation if the chest does not move.",
      "questionDescription": "Mouth – clear secretions and open the mouth.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": "2a07e475-6102-4c45-8800-7088e5df1869",
      "questionText": "Improve ventilation if the chest does not move.",
      "questionDescription": "Bag – squeeze the bag harder.",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }];

    return {
      getQuestions: getQuestions,
      getQuestion: getQuestion,
      validate: validate
    };

    function getQuestions() {
      return questions.map(function(element) {
        return element.questionUuid;
      });
    }

    function getQuestion(uuid) {
      return _.find(questions, function(element) {
        if (element.questionUuid === uuid) {
          return element;
        }
      });
    }

    function validate(answers) {
      var correct = [];
      var incorrect = [];
      _.forEach(answers, function(answer) {
        var question = _.find(questions, function(question) {
          if (answer.question === question.questionUuid) {
            return question;
          }
        });
        if (question.answerText === answer.answer
          || answer.answer === hashCode('Initial')
          || answer.answer === hashCode('Refresher')) {
          correct.push(answer.question);
        } else {
          incorrect.push(answer.question);
        }
      });

      return {
        correct: correct,
        incorrect: incorrect
      }
    }

    function hashCode(value) {
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