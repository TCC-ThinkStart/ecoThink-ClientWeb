angular.module('ecothink').controller('CadastroController', function ($scope, $http, $location, $window) {
    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.submitar = (usuario) => {
        if (usuario.nome && usuario.email && usuario.senha && usuario.confirmar) {
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
    $scope.submeter = (usuario) => {
        console.log(usuario)
        $http.post('http://localhost:4200/usuario', usuario)
            .then(results => { console.log(results.data) })
            .catch(error => {
                console.log(error)
            })
    }
});