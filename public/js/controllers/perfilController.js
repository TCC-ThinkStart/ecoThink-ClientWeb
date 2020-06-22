angular.module('ecothink').controller('PerfilController', function ($scope, $rootScope, $http, $location, recursoLogin) {

    recursoLogin.verify;

    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;

    //sair
    $scope.logout = () => {
        localStorage.clear();
        $location.path('home')
    }

    $scope.userName = localStorage.getItem('userName')
});