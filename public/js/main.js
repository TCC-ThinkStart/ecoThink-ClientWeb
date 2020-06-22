angular.module('ecothink', ['ngRoute', 'meusServicos', 'ui.mask'])
    .config(function ($routeProvider, $locationProvider) {
        //habilidando modo de html
        $locationProvider.html5Mode(true);
        //rotas do angularJs        
        $routeProvider.when('/home', {
            //pagina que sera carregada
            templateUrl: 'partials/home.html',
            //controller da pagina 
            controller: 'IndexController'
        });
        $routeProvider.when('/home/cadastro', {
            templateUrl: 'partials/cadastro.html',
            controller: 'CadastroController'

        });
        $routeProvider.when('/home/cadastrong', {
            templateUrl: 'partials/cadastrong.html',
            controller: 'CadastroOngController'
        });
        $routeProvider.when('/home/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/home/confirm', {
            templateUrl: 'partials/confirmarCadastro.html',
            controller: 'ConfirmarCadastroController'
        });
        $routeProvider.when('/user/perfil', {
            templateUrl: 'partials/perfil.html',
            controller: 'PerfilController'
        });
        $routeProvider.when('/user/editarPerfil', {
            templateUrl: 'partials/editarPerfil.html',
            controller: 'EditarPerfilController'
        });
        $routeProvider.when('/user/calendario', {
            templateUrl: 'partials/calendario.html',
            controller: 'CalendarioController'
        });
        $routeProvider.when('/user/eventos', {
            templateUrl: 'partials/eventos.html',
            controller: 'EventosController'
        });
        $routeProvider.when('/user/evento', {
            templateUrl: 'partials/evento.html',
            controller: 'EventosController'
        });
        $routeProvider.when('/user/criarevento', {
            templateUrl: 'partials/criarEvento.html',
            controller: 'CriarEventosController'
        });
        $routeProvider.when('/user/usuario', {
            templateUrl: 'partials/usuario.html',
            controller: 'UsuarioController'
        });
        $routeProvider.when('/user/descobrir', {
            templateUrl: 'partials/descobrir.html',
            controller: 'UsuarioController'
        });
        $routeProvider.when('/user/pesquisar', {
            templateUrl: 'partials/pesquisar.html',
            controller: 'PesquisarController'
        });
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({ redirectTo: '/home' });
    });