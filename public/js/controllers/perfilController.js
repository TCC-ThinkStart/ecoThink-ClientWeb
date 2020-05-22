angular.module('ecothink').controller('PerfilController',function($scope,$rootScope,$http,$location){
    $rootScope.isLogin = false;
    $rootScope.isUser =true;


    //sair
    $scope.logout = ()=>{
       localStorage.clear();
       $location.path('home/') 
    }
});