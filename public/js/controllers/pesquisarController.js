angular.module('ecothink').controller('PesquisarController', function ($rootScope, $scope, $http, $location, $window, recursoCity, recursoPalavraChave) {
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;
    $scope.results = {}

    recursoCity.query((results) => $scope.municipios = results)

    recursoPalavraChave.query((results) => $scope.palavrasChave = results)

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

    $scope.pesquisarCity = (pesquisar) => {


        $http.get($rootScope.api + '/evento/cidade/' + pesquisar.cidade.codigo)
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

    $scope.pesquisarChave = (pesquisar) => {

        $http.get($rootScope.api + '/evento/palavrachave/' + pesquisar.palavrachave.codigo)
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

    $scope.imgError = () => {
        return 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'
    }
});