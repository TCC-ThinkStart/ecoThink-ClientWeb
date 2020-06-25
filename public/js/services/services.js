angular.module('meusServicos', ['ngResource', 'ngCookies'])
    .factory('recursoLogin', function ($cookies, $location, $rootScope, $http) {
        const routes = {
            register: '/home/register',
            login: '/home/login',
            welcome: '/home'
        }
        function verify() {
            if ($location.path() != routes.register && $location.path() != routes.login && $location.path() != routes.welcome) {
                // verificar se o cookie foi inserido , caso nao , redirecionar para pagina de login

                if ($cookies.get('x-acess-token')) {


                } else {
                    $location.path('home/login')
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
        // function setImageProfile() {
        //     $http.get('http://ec2-34-207-155-158.compute-1.amazonaws.com/foto/' + localStorage.getItem('codeProfile'), {
        //         headers: { 'Authorization': 'Bearer ' + $cookies.get('x-acess-token') }
        //     })
        //         .then(foto => {
        //             console.log(foto.data.url)
        //             const converter = foto.data.url.toString()
        //             console.log(converter)
        //             $cookies.put('x-imageProfile', converter)
        //         })

        // }
        function getImageProfile() {
            if ($cookies.get('x-access-user')) {
                const refaturandoToken = $cookies.get('x-access-user').split('.')
                const infoUser = window.atob(refaturandoToken[0])
                return infoUser
            }

        }
        function userCode() {
            return localStorage.getItem('code')
        }
        function getName() {
            return localStorage.getItem('userName')
        }
        return {
            verify: verify(),
            token: token(),
            userCode: userCode(),
            getName: getName(),
            getProfile: getImageProfile()
        }

    })
    .factory('recursoUser', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/usuario/:usuarioId', null, {
            update: {
                method: 'put'
            }
        });
    })
    .factory('recursoFotoUser', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/foto/usuario/:usuarioId', null, {
            update: {
                method: 'put'
            }
        });
    })
    .factory('recursoFoto', ($resource, $rootScope) => {
        return $resource($rootScope.api + '/foto/:usuarioId', null, {
            update: {
                method: 'put'
            }
        });
    })
    .factory('cadastroDeFotoPerfil', (recursoFotoUser, $q, $rootScope) => {
        // criar objeto
        let servico = {};

        let evento = 'fotoPerfilCadastrada';
        // // criacao de cadastro
        servico.cadastrar = (foto) => {
            //criacao de promisses
            return $q(function (resolve, reject) {
                //caso existir esse id ele ira atualizar as informações 
                if (foto.codigo) {
                    recursoFotoUser.update({ usuarioId: foto.codigo }, foto, function () {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'foto: atualizada com sucesso!',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel alterar o foto ' + foto.codigo
                        });
                    });
                }
                //se nao existir ele ira criar uma nova informação de livro no banco 
                else {
                    recursoFotoUser.save(foto, function () {
                        resolve({
                            mensagem: 'foto Incluida com sucesso ',
                            inclusao: true
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel cadastrar a foto ' + foto.codigo
                        });
                    })
                }
            })
        }
        return servico;
    })
    .factory('recursoEndereco', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/endereco/:parametro', null, {
            update: {
                method: 'put'
            }
        });
    })
    .factory('recursoCity', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/cidade/:parametro', null, {
            update: {
                method: 'put'
            }
        });
    })

    .factory('recursoEvento', function ($resource, $rootScope) {
        return $resource($rootScope.api + '/evento/:eventoId', null, {
            update: {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeEventos', function (recursoEvento, $q) {
        // criar objeto
        let servico = {};
        // // criacao de cadastro
        servico.cadastrar = (evento) => {
            //criacao de promisses
            return $q(function (resolve, reject) {
                //caso existir esse id ele ira atualizar as informações 
                if (evento.codigo) {
                    recursoEvento.update({ id: evento.codigo }, evento, function () {
                        resolve({
                            mensagem: 'evento: ' + evento.nome + ' atualizado com sucesso!',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel alterar o Evento ' + evento.nome
                        });
                    });
                }
                //se nao existir ele ira criar uma nova informação de livro no banco 
                else {
                    recursoEvento.save(evento, function () {
                        resolve({
                            mensagem: 'evento ' + evento.nome + ' Incluido com sucesso ',
                            inclusao: true
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel cadastrar o evento ' + evento.nome
                        });
                    })
                }
            })
        }
        return servico;
    })
