angular.module('ecothink').controller('EventosController',function($scope,$rootScope,$http){
    console.log('entrou no controller de eventos')

    $rootScope.isUser =true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;

});