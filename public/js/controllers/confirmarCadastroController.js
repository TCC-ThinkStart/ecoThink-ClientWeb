angular.module('ecothink').controller('ConfirmarCadastroController', function ($scope, $rootScope, $http, $location) {

    $rootScope.isLogin = true;
    $rootScope.isUser = false;


    $scope.submeter = (usuario) => {
        console.log(usuario)
        $scope.token = 'Bearer ' + usuario.token
        console.log($scope.token)


        $http.put($rootScope.api + '/usuario/confirmacao/confirmar', {
            headers: { 'Authorization': 'Bearer ' + $scope.token }
        }).then(results => {
            console.log(results)
            const mensagem = results.data.success;
            console.log(mensagem)
            Swal.fire({
                icon: 'success',
                title: 'Usuario',
                text: mensagem,
                footer: "<a href='home/login'>Agora faça o Login!</a>"
            })
        })
            .catch(error => {
                console.error(error)
                const msg = error.data.error
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: msg + ',Favor tente Novamente!',
                })
            })


    }
});