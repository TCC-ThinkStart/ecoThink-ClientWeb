angular.module('ecothink').run(function ($rootScope) {

    $rootScope.isLogin = true;
    $rootScope.isDark = false;
    $rootScope.isUser = true;


    $rootScope.api = "http://ec2-34-207-155-158.compute-1.amazonaws.com";
});