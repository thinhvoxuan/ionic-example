(function(){
  var app = angular.module('starter', ['ionic', 'ngCordova']);

  app.controller('deviceCtrl', function($scope, $cordovaDevice, $ionicPlatform, $cordovaCamera, $cordovaGeolocation){

    $scope.pictureUrl = 'http://placehold.it/300x300';
    $scope.takePicture = function(){
      var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.pictureUrl = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        console.log('error', err);
      });
    }

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
          $scope.lat  = position.coords.latitude
          $scope.lng = position.coords.longitude
      }, function(err) {
        console.log('err: ', err)
      });


    ionic.Platform.ready(function(){
      $scope.$apply(function(){
        $scope.platform = ionic.Platform.platform();
        $scope.version = ionic.Platform.version()
        try {
          $scope.device = $cordovaDevice.getModel();
        }
        catch (err) {
          console.log("Error " + err.message);
        }
      });
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
