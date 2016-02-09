(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('deliveryCheck', deliveryCheck);

  function deliveryCheck(_) {

    var questions = [{
      "questionUuid": uuid.v1(),
      "questionText": "Name of the Master Trainer filling out this form ",
      "questionOptions": [
        "Anne Kipsuto",
        "Bonny Munyalo",
        "Duncun Shikuku",
        "Geoffrey Mwai",
        "Hillary Nandasaba",
        "Jaciinta Maru",
        "Janet Rukunga ",
        "Josephat Nandabelwa",
        "Rita Mukosa",
        "Sammy Onyapidi"
      ]
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Were the following delivery or resuscitation items available? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Clean delivery kit",
        "Neonatal mask that fits the resuscitator device",
        "Resuscitator device (bag)",
        "Suction device (to clear the baby's airway)"
      ]
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did the delivery team leader “Identify Helper?”",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did the delivery team leader “Explain roles to the Helper?”",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did the delivery team leader “Review the Emergency Plan with the Helper?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did all of the delivery team “Wash their Hands well with Soap and Water?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did all of the delivery team “Put on Clean Gloves?”",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did a member of the delivery team “Prepare an Area for Ventilation?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did a member of the delivery team “Assemble all Supplies and Equipments?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Was fetal heart rate present at admission? ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Unknown"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Was a heart rate present at delivery? ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Unknown"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Presentation ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Cephalic",
        "Breech",
        "Shoulder dystocia",
        "Transverse",
        "Other"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Mode of delivery ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "SVD",
        "C/S",
        "Assisted Breach (ABD)",
        "Vacuum",
        "Forceps"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Multiple gestation",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Prolonged labor ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Obstructed labor  ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Preeclampsia ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Eclampsia",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Uterine rupture ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Cord prolapse",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Bleeding (i.e., placenta previa) ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Sepsis ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Maternal Infection",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Uterine",
        "Malaria",
        "HIV",
        "None",
        "Other"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Other complications ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Is there meconium present?  ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Is the baby dried thoroughly? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Did the baby cry or breathe? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Is the airway cleared if unresponsive?  ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable (Select N/A if the baby is crying vigorously)"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Is the baby kept warm?  ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Wet cloth removed?",
        "Baby wrapped in 2nd dry cloth and/or hat"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Who cut the cord? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Nurse Midwife",
        "Clinical Officer",
        "MO/ Physician",
        "Domiciliary Midwife or Nurse Midwife",
        "Community Health Worker",
        "Traditional Birth Attendant",
        "Nurse Aid",
        "Other"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "When cutting the cord did the following occur ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Clean hands or gloves",
        "Delay cord cut 1-3 minutes",
        "Clamp or tie AND cut cord with clean materials/instruments"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Birth attendant encourages early breastfeeding ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable (Select N/A if breast feeding not possible due to maternal or neonatal complications)"
      ]
    },{ //this is for answering NO for crying
      "questionUuid": uuid.v1(),
      "questionText": "Positions head and clears airway? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Stimulates breathing by gently rubbing back? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Does the baby begin to breathe or cry after positioning the head, clearing the airway, and/or stimulating by gently rubbing the back?",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Clean delivery kit",
        "Neonatal mask that fits the resuscitator device",
        "Resuscitator device (bag)",
        "Suction device (to clear the baby's airway)"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Bag-and-mask ventilation (BMV) attempts begin w/in 60 seconds after birth? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "If necessary, was ventilation improved correctly? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Did prolonged BMV (5 minutes or longer) occur? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "What was the final disposition of the baby? ",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Recovered",
        "Transferred to On-Site Newborn unit",
        "Transferred to Post-Natal Ward with mother",
        "Transferred to Referral facility",
        "Died. A Perinatal Death Audit Form (mHBB14) should be filled out within 48 hours"
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