angular.module('ecothink').controller('UsuarioController', function ($scope, $rootScope, $http, $routeParams, recursoUser, recursoLogin, recursoFoto) {
    recursoLogin.verify;
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;

    if ($routeParams.usuarioId) {
        //apos isso armazenamos um resultado
        recursoUser.get({ usuarioId: $routeParams.usuarioId }, (results) => {

            $scope.usuarioUnico = results;
            //https://icons-for-free.com/iconfiles/png/512/headset+male+man+support+user+young+icon-1320196267025138334.png
            //capturando foto de perfil do usuario
            recursoFoto.get({ usuarioId: results.idFotoPerfil }, (results) => {

                $scope.profileImage = $rootScope.api + '/' + results.url
            })
            //visualizando os eventos desse usuario
            $http.get($rootScope.api + '/evento/usuario/' + $routeParams.usuarioId)
                .then(results => {


                    $scope.titulos = results.data
                    //foto desse evento
                    for (let c = 0; c <= results.data.length; c++) {
                        $http.get($rootScope.api + '/foto/evento/' + results.data[c]['codigo'])
                            .then(results => {
                                if (results.data.length == 1) {
                                    $scope.titulos[c].img = $rootScope.api + '/' + results.data[0].url
                                    console.log($scope.titulos)
                                }

                                //evento tem foto

                            })
                            .catch(error => console.log(error))
                    }


                })
        })
    }
});