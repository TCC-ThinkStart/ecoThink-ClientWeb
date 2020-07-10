angular.module('ecothink').controller('CadastroController', function ($scope, $http, $location, $window, cadastroDeUsuario) {
    $scope.usuario = {};
    $scope.mensagem = '';

    $scope.submitar = (usuario) => {
        if (usuario.nome && usuario.email && usuario.senha && usuario.dataNascimento && usuario.confirmar) {
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

        cadastroDeUsuario.cadastrar(usuario)
            .then(results => {
                const msg = results.mensagem
                Swal.fire({
                    title: 'Usuario',
                    text: msg,
                    icon: 'success',
                })
                $location.path('/home/confirm')

            })
            .catch(error => {
                const msg = error.mensagem
                Swal.fire({
                    title: 'Erro',
                    text: msg,
                    icon: 'error',
                })
            })
    }
});