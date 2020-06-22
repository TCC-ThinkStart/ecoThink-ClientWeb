angular.module('ecothink').controller('LoginController', function ($scope, $rootScope, $http, $location, $location, recursoLogin) {

    recursoLogin.verify;

    $scope.submitar = (usuario) => {
        if (usuario.email && usuario.senha) {
            $scope.isValid = true;
            return false
        } else {
            return true
        }

    }
    $scope.submeter = (usuario) => {
        console.log(usuario)
        $http.post($rootScope.api + '/login', usuario)
            .then(results => console.log(results.data))
            .catch(error => console.error(error))
    }



});