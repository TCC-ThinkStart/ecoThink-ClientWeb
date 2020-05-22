angular.module('ecothink').controller('IndexController',function($scope,$rootScope,$http){
    console.log('entrou no controller index');

    $rootScope.isLogin = true;
    $rootScope.isUser =false;
});