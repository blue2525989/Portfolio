var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
      templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/home.html',
      controller : 'home',
      controllerAs: 'home'
    }).when('/projects', {
      templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects.html',
      controller : 'projects',
      controllerAs: 'projects'
    }).when('/about', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/about-me.html',
    	controller : 'about',
    	controllerAs : 'about'
    }).when('/education', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/education.html'
    }).when('/project/blue-spa-webapp', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/blue-spa.html'
    }).when('/project/jb-webapp', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/jb-webapp.html'
    }).when('/project/ttb-webapp', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/ttb-webapp.html'
    }).when('/project/ww-webapp', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/ww-webapp.html'
    }).when('/project/cipher-app', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/text-file-cipher-app.html'
    }).when('/project/mysql-manager-app', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/mysql-db-manager-app.html'
    }).when('/project/card-games-app', {
    	templateUrl : 'https://raw.githubusercontent.com/blue2525989/portfolio/master/pages/projects/blue-spa.htmlpoker-blackjack-app.html'
    })
    .otherwise('/');

});

app.controller('navigation', function() {});

app.controller('home', function() {});

app.controller('projects', function() {});

app.controller('about', function() {});



