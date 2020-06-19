angular.module('ecothink').controller('EditarPerfilController', function ($scope, $http) {
    $scope.submitar = (usuario) => {
        if (usuario.nome && usuario.telefone && usuario.cpf) {
            $scope.isValidTell = true;
            $scope.isValid = true;
            return false
        } else {
            return true
        }
    }
});