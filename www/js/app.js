// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $cordovaGoogleAnalytics) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    if(typeof analytics !== undefined) {
      $cordovaGoogleAnalytics.startTrackerWithId("UA-XXXXXXXX-XX");
      $cordovaGoogleAnalytics.setUserId('USER_ID');
    } else {
      console.log("Google Analytics Unavailable");
    }
  });
})

.controller('AwesomeController', function($scope, $cordovaGoogleAnalytics) {
  if(typeof analytics !== undefined) {
    $cordovaGoogleAnalytics.trackView("Awesome Controller");
  }

  $scope.initEvent = function() {
    if(typeof analytics !== undefined) {
      $cordovaGoogleAnalytics.trackEvent("Category", "Action", "Label", 25);
    }
  }
});
