angular.module('ecothink').controller('LoginController', function ($scope, $http, $location, $location) {


    $scope.submitar = (usuario) => {
        if (usuario.email && usuario.senha) {
            $scope.isValid = true;
            return false
        } else {
            return true
        }

    }
    $scope.submeter = (usuario) => {
        console.log(usuario)
        $location.path('/user/perfil');
    }
});