angular.module('ecothink').controller('EditarEnderecoController', function ($scope, $http, $rootScope, recursoLogin) {
    $rootScope.isLogin = false;

    $scope.enviar = (usuario) => {

        console.log(usuario)
    }
});