angular.module('ecothink').controller('PesquisarController', function ($rootScope, $scope, $http, $location, $window, recursoCity) {
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;
    $scope.results = {}

    recursoCity.query((results) => $scope.municipios = results)


    $scope.pesquisaNome = (pesquisa) => {
        $http.get($rootScope.api + '/evento/pesquisa/' + pesquisa.nome)
            .then(results => {
                $scope.resultados = results.data
                console.log(results.data)
                for (let c = 0; c <= results.data.length; c++) {

                    $http.get($rootScope.api + '/foto/evento/' + results.data[c].codigo)
                        .then(imagens => {
                            //evento tem foto
                            if (imagens.data.length == 1) {
                                //https://s3.amazonaws.com/mapa-da-obra-producao/wp-content/uploads/2019/10/shutterstock_1110036392.png
                                $scope.resultados[c].imagem = $rootScope.api + '/' + imagens.data[0].url;

                            }
                            //evento nao tem foto 
                            else {

                            }
                        })
                        .catch(error => console.log(error))
                }

                console.log(results)
            })
            .catch(error => console.warn(error))
    }


});