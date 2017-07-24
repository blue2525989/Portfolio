var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/portfolio/', {
      templateUrl : 'pages/home.html',
      controller : 'home',
      controllerAs: 'home'
    }).when('/projects', {
      templateUrl : 'pages/projects.html',
      controller : 'projects',
      controllerAs: 'projects'
    }).when('/about', {
    	templateUrl : 'pages/about-me.html',
    	controller : 'about',
    	controllerAs : 'about'
    }).when('/education', {
    	templateUrl : 'pages/education.html'
    }).when('/project/blue-spa-webapp', {
    	templateUrl : 'pages/projects/blue-spa.html'
    }).when('/project/jb-webapp', {
    	templateUrl : 'pages/projects/jb-webapp.html'
    }).when('/project/ttb-webapp', {
    	templateUrl : 'pages/projects/ttb-webapp.html'
    }).when('/project/ww-webapp', {
    	templateUrl : 'pages/projects/ww-webapp.html'
    }).when('/project/cipher-app', {
    	templateUrl : 'pages/projects/text-file-cipher-app.html'
    }).when('/project/mysql-manager-app', {
    	templateUrl : 'pages/projects/mysql-db-manager-app.html'
    }).when('/project/card-games-app', {
    	templateUrl : 'pages/projects/poker-blackjack-app.html'
    })
    .otherwise('/portfolio/');

});

app.controller('navigation', function() {});

app.controller('home', function() {});

app.controller('projects', function() {});

app.controller('about', function() {});



