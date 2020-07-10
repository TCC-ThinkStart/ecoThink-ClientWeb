angular.module('ecothink').controller('DescobrirController', function ($scope, $http, recursoLogin, recursoEvento, $rootScope) {
    recursoLogin.verify;
    $rootScope.isUser = true;

    $rootScope.isLogin = false;

    $http.get($rootScope.api + '/evento?random')
        .then(response => {
            $scope.aleatorio = response.data;

            //foto desse evento
            for (let c = 0; c <= response.data.length; c++) {
                $http.get($rootScope.api + '/foto/evento/' + response.data[c].codigo)
                    .then(results => {
                        if (results.data.length == 1) {

                            $scope.aleatorio[c].img = $rootScope.api + '/' + results.data[0].url;
                        } else {
                            $scope.aleatorio[c].img = 'https://www.callinvest.com.br/wp-content/uploads/2017/08/indisponivel.png';
                        }

                        //evento tem foto

                    })
                    .catch(error => console.log(error))

            }
        })
        .catch(error => console.warn(error))


});