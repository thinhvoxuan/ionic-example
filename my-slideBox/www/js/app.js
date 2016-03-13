// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller('slideCtrl', function($scope){
  $scope.slides = [];
  $scope.activeSlide = 0;
  $scope.setSlide = function(idx){
    $scope.activeSlide = idx;
  }

  for(var i  = 1; i <= 5; i++){
    $scope.slides.push({
      title: 'Slide #' + i,
      description: 'Content in slide #' + i
    })
  }
})
.run(function($ionicPlatform) {
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
