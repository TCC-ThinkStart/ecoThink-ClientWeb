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
                console.log(results)
            })
            .catch(error => console.warn(error))
    }


});