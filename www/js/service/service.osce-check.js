(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('osceCheck', osceCheck);

  function osceCheck(_) {

    var questions = [{
      "questionUuid": uuid.v1(),
      "questionText": "Type of HBB Training:",
      "questionOptions": [
        "Initial Training – Post-test only",
        "Refresher training – Pre-test",
        "Refresher training – Post-test",
        "CME",
        "QI Visit"
      ]
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Identifies a helper and makes an emergency plan",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Prepares the area for delivery",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Cleans hands and maintains clean technique throughout",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Prepares an area for ventilation and checks equipment",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Dries thoroughly*",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Removes wet cloth",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Recognizes baby is not crying*",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Keeps warm",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Positions head and clears airway*",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Stimulates breathing by rubbing the baby",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Recognizes baby is breathing well",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Clamps or ties and cuts the cord",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Positions skin-to-skin on mother’s chest and communicates with mother",
      "answerText": hashCode("Done"),
      "questionOptions": [
        "Done",
        "Not Done"
      ]
    },];

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
      var mandatories = [false, false, false];
      _.forEach(answers, function(answer) {
        var question = _.find(questions, function(question) {
          if (answer.question === question.questionUuid) {
            return question;
          }
        });
        if (question.answerText === answer.answer) {
          correct.push(answer.question);
          if(question.questionText.indexOf("Dries")>=0){
            mandatories[0] = true;
          }
          if(question.questionText.indexOf("not crying")>=0){
            mandatories[1] = true;
          }
          if(question.questionText.indexOf("clears airway")>=0){
            mandatories[2] = true;
          }
        } else {
          incorrect.push(answer.question);
        }
      });

      return {
        correct: correct,
        incorrect: incorrect,
        mandatories: mandatories
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