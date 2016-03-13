(function(){
  var app = angular.module('starter', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'tabs-home': {
          templateUrl: 'templates/home.html'
        }
      }
    });
    $stateProvider.state('detail', {
      url: '/detail',
      views: {
        'tabs-home': {
          templateUrl: 'templates/detail.html'
        }
      }
    });
    $stateProvider.state('settings', {
      url: '/settings',
      views: {
        'tabs-settings': {
          templateUrl: 'templates/settings.html'
        }
      }
    });


    $urlRouterProvider.otherwise('/home');
  })

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}())

