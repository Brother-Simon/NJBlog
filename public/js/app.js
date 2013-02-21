/**
 * Created with JetBrains WebStorm.
 * User: c-sailor.zhang
 * Date: 1/30/13
 * Time: 9:57 AM
 * To change this template use File | Settings | File Templates.
 */
define(['angular','controllers/layout','controllers/index','controllers/login','controllers/signup'], function (angular) {

var app = angular.module('app', []);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl:'/index.html', controller:IndexController}).
        when('/login', {templateUrl:'/login.html', controller:LoginController}).
        when('/logout', {templateUrl:'/logout.html', controller:LogoutController}).
        when('/signup', {templateUrl:'/signup.html', controller:SignUpController}).
        otherwise({redirectTo:'/login'});
}]);

return app;

});
