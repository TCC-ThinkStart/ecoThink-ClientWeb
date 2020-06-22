angular.module('ecothink').controller('UsuarioController', function ($scope, $rootScope, $routeParams, recursoUser) {
    $rootScope.isLogin = false;
    $rootScope.isUser = true;
    $rootScope.isDark = false;

    if ($routeParams.usuarioId) {
        //apos isso armazenamos um resultado
        recursoUser.get({ usuarioId: $routeParams.usuarioId }, (results) => {
            console.log(results);
            $scope.usuarioUnico = results;
        })
    }
});