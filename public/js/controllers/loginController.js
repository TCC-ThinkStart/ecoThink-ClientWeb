angular.module('ecothink').controller('LoginController', function ($scope, $rootScope, $cookies, $http, $location, $location, recursoLogin) {

    $rootScope.isLogin = true;
    $rootScope.isUser = false;

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

        //login
        $http.post($rootScope.api + '/login', usuario)
            .then(results => {
                //return -> auth,token
                $scope.user = results.data

                recursoLogin.token
                $cookies.put('x-acess-token', $scope.user.token)
                recursoLogin.setProfile
                $location.path('user/perfil')



            })
            .catch(error => {
                //console.error(error)
                if (error.data) {

                    $scope.msg = error.data.error
                }
            })
    }



});