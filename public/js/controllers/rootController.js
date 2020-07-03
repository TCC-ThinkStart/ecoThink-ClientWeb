angular.module('ecothink').run(function ($rootScope, $http, recursoLogin) {

    $rootScope.isLogin = true;
    $rootScope.isDark = false;
    $rootScope.isUser = true;


    $rootScope.api = "http://ec2-34-207-155-158.compute-1.amazonaws.com";


    //$http.defaults.headers.common.Authorization = 'Bearer ' + recursoLogin.token;
});