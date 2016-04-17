(function() {
  'use strict';

  angular.module('mhbb.services')
    .factory('deliveryCheck', deliveryCheck);

  function deliveryCheck(_) {

    var questions = [{
      "questionUuid": uuid.v1(),
      "questionText": "Name of the Master Trainer filling out this form ",
      "answerText": hashCode("Other"),
      "goTo" : 2, //if not answerText
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
        "Sammy Onyapidi",
        "Other"
      ]
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Please describe who is “Other” ",
      "answerType"  : "Text"
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Name of health facility and country where observation is occurring",
      "answerType"  : "Text"
    },{
      "questionUuid": uuid.v1(),
      "questionText": "In what type of health facility is the delivery observation occurring (Select only one answer)?",
      "answerText": hashCode("Other"),
      "goTo" : 5, //if not answerText
      "questionOptions": [
        "Tertiary Referral Hospital",
        "District Hospital (County Hospital)",
        "Sub-district Hospital (sub-County Hospital)",
        "Mission Hospital",
        "In-patient Private Hospital",
        "Health Center",
        "Dispensary",
        "Health Outpost",
        "Mobile unit",
        "Home-based delivery, not in health facility",
        "Other"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Please describe what is “Other” ",
      "answerType"  : "Text"
    },{
      "questionUuid": uuid.v1(),
      "questionText": "What is the date you are completing this form",
      "answerType"  : "Date"
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "Were the following delivery and/or resuscitation items available? (Tick all that are available).",
      "answerType"  : "Multi",
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
        "Not Applicable—single birth attendant"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did the delivery team leader “Explain roles to the Helper?”",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable—single birth attendant"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did the delivery team leader “Review the Emergency Plan with the Helper?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable—single birth attendant"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born, did all members of the delivery team wash their hands well with soap and water or use hand sanitizer? (Select only one answer). ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes – All the delivery team cleaned their hands with soap and water or hand sanitizer",
        "No – Soap and water or hand sanitizer were available, but not all members of the delivery team cleaned their hands",
        "No -- No clean water available",
        "No -- No soap available",
        "No -- No hand sanitizer available"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did all of the delivery team “Put on Clean Gloves?”",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable -- Clean gloves not available"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did a member of the delivery team “Prepare an Area for Ventilation?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No",
        "Not Applicable – No space available for separate resuscitation/ventilation area"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Before the baby is born did a member of the delivery team “Assemble all Supplies and Equipments?” ",
      //"answerText": hashCode("Yes"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "What date was mother admitted",
      "answerType"  : "Date"
    }, {
      "questionUuid": uuid.v1(),
      "questionText": "What time was mother admitted",
      "answerType"  : "Time"
    }, {
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
      "answerText": hashCode("Other"),
      "goTo" : 20, //if not answerText
      "questionOptions": [
        "Cephalic",
        "Breech",
        "Shoulder dystocia",
        "Transverse",
        "Other"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Please describe what is “Other” ",
      "answerType"  : "Text"
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
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Prolonged Labor",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Obstructed Labor",
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Preeclampsia (high maternal blood pressure and protein in the urine)",
      "questionOptions": [
        "Yes",
        "No",
        "Unknown/Not assessed"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Eclampsia",
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Uterine Rupture",
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Cord prolapse",
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Bleeding",
      "questionOptions": [
        "Yes, placenta previa",
        "Yes, antepartum hemorrhage, not placenta previa",
        "Yes, post-partum hemorrhage",
        "No",
        "Unknown/not assessed"
      ]
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Pregnancy, labor, and delivery complications",
      "questionDescription": "Obstructed Labor",
      "answerText": hashCode("Other"),
      "goTo" : 31,
      "questionOptions": [
        "Sepsis",
        "Uterine",
        "Malaria",
        "HIV",
        "None",
        "Other"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Please describe what is “Other Maternal Infection” ",
      "answerType"  : "Text"
    },
    {
      "questionUuid": uuid.v1(),
      "questionText": "Other complications ",
      "answerText": hashCode("Yes"),
      "goTo"      : 33,
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Please specify other complication ",
      "answerType"  : "Text"
    },{
      "questionUuid": uuid.v1(),
      "questionText": "What date was the baby born? ",
      "answerType"  : "Date"
    },{
      "questionUuid": uuid.v1(),
      "questionText": "What time was the baby born?",
      "answerType"  : "Time"
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
        "No – Towels or cloths were available, but baby not dried thoroughly",
        "Not applicable – No towels or cloths were available"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Did the baby cry or breathe? ",
      "answerText": hashCode("Yes"),
      "goTo" : 45,
      "questionOptions": [
        "Yes",
        "No"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "At what time did the baby cry",
      "answerType"  : "Time"
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
      "questionText": "Is the baby kept warm (tick all that apply)?",
      "answerType": "Multi",
      "questionOptions": [
        "Wet cloth removed?",
        "Baby wrapped in 2nd dry cloth",
        "Hat placed on baby’s head",
        "Baby placed skin-to-skin with mother"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Who cut the cord? ",
      "answerText": hashCode("Other"),
      "goTo" : 43,
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
      "questionText": "Please mention who is the “Other” person cut the cord ",
      "answerType"  : "Text"
    },{
      "questionUuid": uuid.v1(),
      "questionText": "When cutting the cord, did the following occur (tick all that apply)?",
      "answerType": "Multi",
      "questionOptions": [
        "Clean hands or gloves",
        "Delay cord cut 1-3 minutes",
        "Clamp or tie AND cut cord with clean materials/instruments"
      ]
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Birth attendant encourages initiation of early breastfeeding",
      "answerText": hashCode("Done"),
      "goTo"  : 54,
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
      "questionText": "Baby does NOT respond to initial resuscitation efforts",
      "answerText": hashCode("Yes"),
      "goTo" : 54,
      "questionOptions": [
        "Yes",
        "No"
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
      "questionText": "Time resuscitation began ",
      "answerType"  : "Time"
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
    },{
      "questionUuid": uuid.v1(),
      "questionText": "Submit Answers",
      //"answerText": hashCode("Done"),
      "questionOptions": [
        "Yes"
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