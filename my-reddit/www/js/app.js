(function(){
  var app = angular.module('myreddit', ['ionic', 'angularMoment']);

  app.controller('RedditCtrl', function($scope, $http, $filter){
    $scope.content = [];


    var fetchAPI = function(params, callback){
      $http.get('https://www.reddit.com/r/reactjs/.json', {
        params: params
      }).success(function(response){
        var result = []
        angular.forEach(response.data.children, function(child){
          result.push(child.data)
        });
        callback(result)
      })
    }

    $scope.loadOlderReddit = function(){
      var params = {}
      if ($scope.content.length > 0){
        params['after'] = $scope.content[$scope.content.length - 1].name;
      }

      fetchAPI(params, function(listReddit){
        $scope.content = $scope.content.concat(listReddit);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      })
    }

    $scope.loadNewerReddit = function(){
      var params = {}
      if ($scope.content.length > 0){
        params['before'] = $scope.content[0].name;
      }
      fetchAPI(params, function(newData){
        $scope.content = newData.concat($scope.content)
        $scope.$broadcast('scroll.refreshComplete');
      })
    }

    $scope.openLink = function(url){
      window.open(url, '_blank');
    };

    $scope.$on('$stateChangeSuccess', function() {
      $scope.loadOlderReddit();
    });

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.cordova && window.cordova.InAppBrowser){
        window.open = window.cordova.InAppBrowser.open;
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());
