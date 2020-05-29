angular.module('ecothink').controller('LoginController', function ($scope, $http, $location, $location) {
    console.log('entrou no controller de login')

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