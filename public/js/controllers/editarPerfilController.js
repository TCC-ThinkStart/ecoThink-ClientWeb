angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http) {
    $scope.submitar = (usuario) => {
        if (usuario.nome && usuario.email && usuario.senha && usuario.confirmar && usuario.cnpj) {
            if (usuario.senha === usuario.confirmar) {
                $scope.isValid = true;

                return false
            } else {
                return true
            }

        } else {

            return true
        }

    }
});