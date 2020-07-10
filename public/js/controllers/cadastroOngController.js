angular.module('ecothink').controller('CadastroOngController', function ($scope, $http, $location, $window, $rootScope) {


    $rootScope.isLogin = false;
    $rootScope.isDark = true;

    $rootScope.isUser = false;


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
    $scope.submeter = (usuario) => {
        console.log(usuario)
        $http.post($rootScope.api + '/usuario/organizacao', usuario)
            .then(results => {
                const msg = results.data.nome + ' Dados enviados com sucesso,Verifique seu email para ativar o seu cadastro !'
                Swal.fire({
                    title: 'Organizador',
                    text: msg,
                    icon: 'success',
                })
                $location.path('/home/confirm')
            })
            .catch(erro => {
                const msg = erro.data
                Swal.fire({
                    title: 'Erro',
                    text: msg,
                    icon: 'error',
                })
            })
    }
});