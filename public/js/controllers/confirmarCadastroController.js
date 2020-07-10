angular.module('ecothink').controller('ConfirmarCadastroController', function ($scope, $rootScope, $http, $location) {

    $rootScope.isLogin = true;
    $rootScope.isUser = false;


    $scope.submeter = (usuario) => {


        $http.defaults.headers.common.Authorization = 'Bearer ' + usuario.token;
        $http.put($rootScope.api + '/usuario/confirmacao/confirmar', usuario)
            .then(results => {


                const mensagem = results.data.success
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario',
                    text: mensagem,
                    footer: "<a href='home/login'>Agora faça o Login!</a>"
                })
            })
            .catch(error => {

                const msg = error.data.error
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: msg + ',Favor tente Novamente!',
                })
            })
    }


})