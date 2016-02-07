(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('knowledgeCheck', knowledgeCheck);

  function knowledgeCheck(_){

    var questions = [{
      "questionUuid": "d99ede15-88f1-4d78-99b7-444e4718af44",
      "questionType": "single-choice",
      "questionText": "In the first minute after birth, you should",
      "answerText": hashCode("Help the baby breathe"),
      "questionOptions": [
        "Bathe the baby",
        "Help the baby breathe",
        "Feed the baby",
        "Not touch the baby"
      ]
    }, {
      "questionUuid":"bf7246c2-0070-45d9-8b7f-433075b90b0e",
      "questionType": "single-choice",
      "questionText": "To prepare for a birth",
      "answerText": hashCode("You identify a helper and review the emergency plan"),
      "questionOptions": [
        "You identify a helper and review the emergency plan",
        "You ask everyone but the mother to leave the area",
        "You prepare equipment only when you need it",
        "You do not need a helper"
      ]
    }, {
      "questionUuid": "74850201-a791-4c89-a132-3689374772d8",
      "questionType": "single-choice",
      "questionText": "To prepare the area for delivery",
      "answerText": hashCode("Make sure the area is clean, warm, and well-lighted"),
      "questionOptions": [
        "Open all the doors and windowsto get fresh air",
        "A clean space for the baby will not be required",
        "Make sure the area is clean, warm, and well-lighted",
        "Keep the room temperature cold"
      ]
    }, {
      "questionUuid": "f05311c0-adc0-4023-8f52-a6fa78f2110a",
      "questionType": "single-choice",
      "questionText": "Which baby can receive routine care after birth?",
      "answerText": hashCode("A baby who is crying and/or breathing well"),
      "questionOptions": [
        "A baby who is not breathing",
        "A baby who is gasping",
        "A baby who is crying and/or breathing well",
        "A baby who is limp"
      ]
    }, {
      "questionUuid": "da5ae3cc-514d-4fba-98dd-b3c56fa89a6d",
      "questionType": "single-choice",
      "questionText": "Routine care for a healthy baby at birth includes",
      "answerText": hashCode("Drying, removing the wet cloth, and positioning the baby skin - to - skin"),
      "questionOptions": [
        "Drying, removing the wet cloth, and bathing the baby",
        "Drying, removing the wet cloth, and positioning the baby skin - to - skin",
        "Bathing and putting clean clothes on the baby",
        "Drying and wrapping the baby in the wet cloth"
      ]
    }, {
      "questionUuid": "292bdf0e-f0b5-4ffb-b001-6fb8cf1cc869",
      "questionType": "single-choice",
      "questionText": "When should the umbilical cord be clamped or tied and cut during routine care?",
      "answerText": hashCode("Around 1-3 minutes after birth"),
      "questionOptions": [
        "After the placenta is delivered",
        "Around 1-3 minutes after birth",
        "Immediately after the baby is born",
        "Before a baby has cried"
      ]
    }, {
      "questionUuid": "7b92bbee-311c-4376-9ba6-44bc8e1c18b5",
      "questionType": "single-choice",
      "questionText": "A baby is quiet, limp and not breathing at birth. What should you do?",
      "answerText": hashCode("Dry the baby thoroughly"),
      "questionOptions": [
        "Dry the baby thoroughly",
        "Shake the baby",
        "Throw cold water on the face",
        "Hold the baby upside down"
      ]
    }, {
      "questionUuid": "2a07e475-6102-4c45-8800-7088e5df1869",
      "questionType": "single-choice",
      "questionText": "A baby is born through meconium-stained amniotic fluid. Which statement is TRUE?",
      "answerText": hashCode("Clear the airway before drying the baby"),
      "questionOptions": [
        "Stimulate the baby and then clear the airway",
        "Meconium cannot be inhaled into the lungs",
        "Clear the airway before drying the baby",
        "All babies born through meconium-stained amniotic fluid can receive routine care"
      ]
    }, {
      "questionUuid": "610f30b8-a929-4448-ac42-3c52d4a73757",
      "questionType": "single-choice",
      "questionText": "What should you do in The Golden Minute(SM)?",
      "answerText": hashCode("Help a baby breathe if necessary"),
      "questionOptions": [
        "Bathe the baby",
        "Deliver the placenta",
        "Evaluate the heart rate",
        "Help a baby breathe if necessary"
      ]
    }, {
      "questionUuid": "4f784e15-7706-4f44-991d-4f78005f5a69",
      "questionType": "single-choice",
      "questionText": "A newborn baby is quiet, limp and not crying. The baby does not respond to stepsto stimulate breathing. What should you do next?",
      "answerText": hashCode("Begin ventilation"),
      "questionOptions": [
        "Slap the baby’s back",
        "Hold the baby upside down",
        "Squeeze the baby’sribs",
        "Begin ventilation"
      ]
    }, {
      "questionUuid": "7a9fea9b-44c9-4adc-8b92-65cd0692c682",
      "questionType": "single-choice",
      "questionText": "Which of the following statements about ventilation with bag and mask is TRUE?",
      "answerText": hashCode("Squeeze the bag to produce gentle movement of the chest"),
      "questionOptions": [
        "The mask should cover the eyes",
        "Air should escape between the mask and face",
        "Squeeze the bag to produce gentle movement of the chest",
        "Squeeze the bag to give 80 to 100 breaths per minute"
      ]
    }, {
      "questionUuid": "0e2772c6-20fc-4d03-94ce-efbfb1c1a12f",
      "questionType": "single-choice",
      "questionText": "Which of the following signs MUST be monitored in a baby during the first few hours after birth?",
      "answerText": hashCode("Breathing"),
      "questionOptions": [
        "Length",
        "Breathing ",
        "Smile",
        "Urine output"
      ]
    }, {
      "questionUuid": "c273fb21-0e7d-40da-b300-13cd9e241556",
      "questionType": "single-choice",
      "questionText": "A baby’s chest is not moving with bag and mask ventilation. What should you do?",
      "answerText": hashCode("Reapply the mask to get a better seal"),
      "questionOptions": [
        "Stop ventilation",
        "Reapply the mask to get a better seal",
        "Slap the baby’s back",
        "Give medicine to the baby"
      ]
    }, {
      "questionUuid": "3568df68-cb1c-4f40-9b78-a50325e6d772",
      "questionType": "single-choice",
      "questionText": "You can stop ventilation if",
      "answerText": hashCode("Baby’s heart rate is 120 per minute and the baby is breathing or crying"),
      "questionOptions": [
        "Baby is blue and limp",
        "Baby’s heart rate is 80 per minute",
        "Baby’s heart rate is 120 per minute and the chest is not moving",
        "Baby’s heart rate is 120 per minute and the baby is breathing or crying"
      ]
    }, {
      "questionUuid": "6f0b9189-63a0-4cb6-8d4d-e2ddd09719e4",
      "questionType": "single-choice",
      "questionText": "What should you do to keep the baby warm?",
      "answerText": hashCode("Place the baby skin-to-skin with mother"),
      "questionOptions": [
        "Open all the windows to allow warm air to circulate",
        "Give the baby a bath after birth",
        "Place hot water bottles next to the baby’sskin",
        "Place the baby skin-to-skin with mother"
      ]
    }, {
      "questionUuid": "e05090bd-da12-46c6-99f6-feacb2d21f88",
      "questionType": "single-choice",
      "questionText": "What should you do to keep the baby clean?",
      "answerText": hashCode("Wash your hands before touching the baby and help mother wash her hands before breastfeeding"),
      "questionOptions": [
        "Wash your hands before touching the baby and help mother wash her hands before breastfeeding",
        "Reuse the suction device before cleaning",
        "Keep the umbilical cord tightly covered",
        "Do not touch the baby"
      ]
    }, {
      "questionUuid": "1cc60a7f-3abe-4afd-a4e9-4c00e6b5cb9a",
      "questionType": "single-choice",
      "questionText": "A newborn baby’s heart rate should be:",
      "answerText": hashCode("Faster than your heart rate"),
      "questionOptions": [
        "Faster than your heart rate",
        "Slower than your heart rate"
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

    function validate() {
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