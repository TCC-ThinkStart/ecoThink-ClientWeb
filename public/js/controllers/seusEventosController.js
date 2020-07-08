angular.module('ecothink').controller('SeusEventosController', function ($scope, $http, $rootScope, recursoLogin, recursoUser, recursoEndereco) {

    recursoLogin.verify;
    $rootScope.isLogin = false;
    $http.get($rootScope.api + '/evento/usuario/' + recursoLogin.userCode + '/inscrito')
        .then(results => {
            $scope.eventos = results.data
            for (let c = 0; c <= results.data.length; c++) {
                recursoUser.get({ usuarioId: $scope.eventos[c].idOrganizador }, (usuario) => {
                    $scope.eventos[c].usuario = usuario.nome;
                })
                recursoEndereco.get({ parametro: $scope.eventos[c].idEndereco }, (endereco) => {
                    $scope.eventos[c].endereco = endereco.logradouro + ' - ' + endereco.numero + ',' + endereco.bairro;
                })
                $http.get($rootScope.api + '/foto/evento/' + results.data[c].codigo)
                    .then(imagens => {
                        //evento tem foto
                        if (imagens.data.length == 1) {
                            //https://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2019/10/shutterstock_1110036392.png
                            $scope.eventos[c].imagem = $rootScope.api + '/' + imagens.data[0].url;

                        }
                        //evento nao tem foto 
                        else {

                        }
                    })
                    .catch(error => console.log(error))
            }
            console.log($scope.eventos)
        })
        .catch(error => console.error(error))
})