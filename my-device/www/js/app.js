(function(){
  var app = angular.module('starter', ['ionic', 'ngCordova']);

  app.controller('deviceCtrl', function($scope, $cordovaDevice, $ionicPlatform){
    ionic.Platform.ready(function(){
      console.log('infor: ', angular.toJson(ionic.Platform.platform()));
      console.log('infor: ', angular.toJson(ionic.Platform.version()));

      try {
        $scope.uuid = $cordovaDevice.getUUID();
      }
      catch (err) {
        console.log("Error " + err.message);
      }
    });
  });

  app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })


}())
