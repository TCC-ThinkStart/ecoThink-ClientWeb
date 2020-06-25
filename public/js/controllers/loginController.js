angular.module('ecothink').controller('LoginController', function ($scope, $rootScope, $cookies, $http, $location, $location, recursoLogin, recursoFoto) {

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


                $cookies.put('x-acess-token', $scope.user.token)
                if ($cookies.get('x-acess-token')) {
                    const refaturandoToken = $cookies.get('x-acess-token').split('.')
                    //capturando a parte de informação do usuario 
                    const infoUser = JSON.parse(atob(refaturandoToken[1]))

                    // Setting a localStorage
                    localStorage.setItem('userName', infoUser.nome)
                    localStorage.setItem('auth', infoUser.nivel)
                    localStorage.setItem('code', infoUser.codigo)
                    $http.get('http://ec2-34-207-155-158.compute-1.amazonaws.com/usuario/' + localStorage.getItem('code'), {
                        headers: { 'Authorization': 'Bearer ' + $cookies.get('x-acess-token') }
                    }).then(usuario => {
                        localStorage.setItem('codeProfile', usuario.data.idFotoPerfil)

                    })

                }
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