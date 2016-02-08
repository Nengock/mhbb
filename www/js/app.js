(function() {
  'use strict';

  angular.module('mhbb', ['ionic', 'mhbb.controllers', 'mhbb.services'])
    .run(initializePlatform)
    .config(configureRoute);

  function initializePlatform($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }

  function configureRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('lookup', {
        url: '/lookup',
        controller: 'LookupController',
        controllerAs: 'lookup',
        templateUrl: 'templates/page.lookup.html'
      })
      .state('register', {
        url: '/register',
        controller: 'RegisterController',
        controllerAs: 'register',
        templateUrl: 'templates/page.register.html'
      })
      .state('knowledge-review', {
        url: '/knowledge-review',
        controller: 'KnowledgeReviewController',
        controllerAs: 'knowledgeReview',
        templateUrl: 'templates/page.knowledge-review.html',
        params: {
          incorrect: [],
          correct: []
        }
      })
      .state('knowledge-check', {
        url: '/knowledge-check',
        controller: 'KnowledgeCheckController',
        controllerAs: 'knowledgeCheck',
        templateUrl: 'templates/page.knowledge-check.html',
        params: {
          correct: [],
          incorrect: []
        }
      })
      .state('bagmask-check', {
        url: '/bagmask-check',
        controller: 'BagMaskCheckController',
        controllerAs: 'bagMaskCheck',
        templateUrl: 'templates/page.bagmask-check.html',
        params: {
          attempt: null,
          correct: [],
          incorrect: []
        }
      })
      .state('bagmask-review', {
        url: '/bagmask-review',
        controller: 'BagMaskReviewController',
        controllerAs: 'bagMaskReview',
        templateUrl: 'templates/page.bagmask-review.html',
        params: {
          attempt: null,
          correct: [],
          incorrect: []
        }
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })
      // Each tab has its own nav history stack:
      .state('tab.dashboard', {
        url: '/dashboard',
        views: {
          'tab-dashboard': {
            templateUrl: 'templates/tab.dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
          }
        }
      })
      .state('tab.lessons', {
        url: '/lessons',
        views: {
          'tab-lessons': {
            templateUrl: 'templates/tab.lessons.html',
            controller: 'LessonsController',
            controllerAs: 'lessons'
          }
        }
      })
      .state('tab.settings', {
        url: '/settings',
        views: {
          'tab-settings': {
            templateUrl: 'templates/tab.settings.html',
            controller: 'SettingsController',
            controllerAs: 'settings'
          }
        }
      });

    $urlRouterProvider.otherwise(function($injector, $location) {
      var localStorage = $injector.get('localStorage');
      var path = localStorage.get('users') ? '/tab/dashboard' : 'register';
      $location.path(path);
    });

  }
})();
