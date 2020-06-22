angular.module('meusServicos', ['ngResource', 'ngCookies'])
    .factory('recursoLogin', function ($cookies, $location) {
        const routes = {
            register: '/home/register',
            login: '/home/login'
        }
        function verify() {
            if ($location.path() != routes.register && $location.path() != routes.login) {
                // verificar se o cookie foi inserido , caso nao , redirecionar para pagina de login

                if ($cookies.get('x-acess-token')) {
                    const refaturandoToken = $cookies.get('x-acess-token').split('.')
                    //capturando a parte de informação do usuario 
                    const infoUser = JSON.parse(atob(refaturandoToken[1]))

                    // Setting a localStorage
                    localStorage.setItem('userName', infoUser.nome)
                    localStorage.setItem('auth', infoUser.nivel)
                    localStorage.setItem('code', infoUser.codigo)

                } else {
                    alert('Você Precisa estar Logado!')
                    $location.path('/home/login')
                }
            } else {
                console.log('essa rota nao vai aplicar o cookie')
            }
        }
        function token() {
            if ($cookies.get('x-acess-token')) {
                const refaturandoToken = $cookies.get('x-acess-token');
                // Setting a cookie

                return refaturandoToken
            }
        }

        return {
            verify: verify(),
            token: token()
        }

    })
    .factory('recursoEvento', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/evento/:eventoId', null, {
            update: {
                method: 'put'
            }
        });
    })  