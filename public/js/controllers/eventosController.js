angular.module('ecothink').controller('EventosController', function ($scope, $rootScope, $http, recursoLogin, recursoUser, recursoEndereco, recursoEvento) {

    recursoLogin.verify;

    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $rootScope.isDark = false;

    //capturando evento
    recursoEvento.query((results) => {
        $scope.events = results
        for (let c = 0; c <= results.length; c++) {
            recursoUser.get({ usuarioId: $scope.events[c].idOrganizador }, (usuario) => {
                $scope.events[c].usuario = usuario.nome;
            })
            $http.get($rootScope.api + '/foto/evento/' + results[c].codigo)
                .then(imagens => {
                    //evento tem foto
                    if (imagens.data.length == 1) {
                        //https://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2019/10/shutterstock_1110036392.png
                        $scope.events[c].imagem = $rootScope.api + '/' + imagens.data[0].url;

                    }
                    //evento nao tem foto 
                    else {

                    }
                })
                .catch(error => console.log(error))
        }
    }, (error) => {
        console.error(error)
    })





});