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
                    console.log(results.data)
                    const titulos = results.data.map((eventos) => { return eventos.nome })
                    $scope.titulos = titulos
                })
        })
    }
});