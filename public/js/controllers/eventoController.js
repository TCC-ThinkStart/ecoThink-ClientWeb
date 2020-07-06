angular.module('ecothink').controller('EventoController', function ($scope, $routeParams, $http, $rootScope, recursoLogin, recursoEvento, recursoEndereco, recursoUser, recursoFotoEvento) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;


    if ($routeParams.eventoId) {
        //apos isso armazenamos um resultado
        $http.get($rootScope.api + '/evento/' + $routeParams.eventoId)
            .then((results) => {
                $scope.inscritos = results.headers('x-total-subscribers-count')
                console.log(results)
                $scope.eventoUnico = results.data;
                //conversao para endereço
                recursoEndereco.get({ parametro: $scope.eventoUnico.idEndereco }, (enderecos) => {

                    $scope.eventoUnico.endereco = enderecos.logradouro + "," + enderecos.bairro + "," + enderecos.numero;
                })
                recursoUser.get({ usuarioId: $scope.eventoUnico.idOrganizador }, (usuario) => {

                    $scope.eventoUnico.usuario = usuario.nome;
                })

            })
            .catch((error) => console.log(error));

        $http.get($rootScope.api + '/foto/evento/' + $routeParams.eventoId)
            .then(results => {
                //evento tem foto
                if (results.data.length == 1) {
                    //https://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2019/10/shutterstock_1110036392.png
                    $scope.eventImage = $rootScope.api + '/' + results.data[0].url;
                }
                //evento nao tem foto 
                else {

                }
            })
            .catch(error => console.log(error))



    }

    $scope.inscrever = () => {
        $http.post($rootScope.api + '/evento/' + $routeParams.eventoId + '/usuario/' + recursoLogin.userCode)
            .then(results => {
                const mensagem = results.data.success;
                Swal.fire({
                    title: 'Evento',
                    text: mensagem,
                    icon: 'success',
                })
            })
            .catch(error => {
                $scope.mensagem = error.data.error;
                Swal.fire({
                    title: 'Evento',
                    text: $scope.mensagem,
                    icon: 'error',
                })
                console.warn(error)
            })
    }
})