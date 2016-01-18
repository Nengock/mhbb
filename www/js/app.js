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
      .state('review', {
        url: '/review/:uuid',
        controller: 'ReviewController',
        controllerAs: 'review',
        templateUrl: 'templates/page.review.html',
        params: {
          uuid: null,
          incorrect: [],
          correct: []
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
      .state('tab.lesson-detail', {
        url: '/lessons/:uuid',
        views: {
          'tab-lessons': {
            templateUrl: 'templates/tab.lesson.detail.html',
            controller: 'LessonDetailController',
            controllerAs: 'lesson'
          }
        },
        params: {
          uuid: null,
          correct: [],
          incorrect: []
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

    $urlRouterProvider.otherwise(function($injector, $location){
      var localStorage = $injector.get('localStorage');
      var path = localStorage.get('user') ? '/tab/dashboard' : 'lookup';
      $location.path(path);
    });

  }
})();
