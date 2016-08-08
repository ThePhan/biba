var routerApp = angular.module('routerApp', ['ui.router']);
// var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',{
    url: '/home',
    templateUrl: './app/views/home.html',
    controller: 'homeController'
  })

  .state('about',{
    url: '/about',
    templateUrl: './app/views/about.html',
    controller: 'aboutController'
  })
});
