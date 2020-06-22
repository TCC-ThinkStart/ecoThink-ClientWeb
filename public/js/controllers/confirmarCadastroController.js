angular.module('ecothink').controller('ConfirmarCadastroController', function ($scope, $rootScope, $http, $location, recursoLogin) {

    $rootScope.isLogin = true;
    $rootScope.isUser = false;

    $scope.submitar = (usuario) => {
        if (usuario.token) {
            $scope.isValid = true;
            return false
        } else {
            return true
        }

    }
    $scope.submeter = (usuario) => {

        console.log(usuario)
    }
});