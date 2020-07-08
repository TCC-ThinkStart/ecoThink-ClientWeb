angular.module('ecothink', ['minhasDiretivas', 'ngRoute', 'meusServicos', 'ui.mask'])
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
        $routeProvider.when('/user/evento/:eventoId', {
            templateUrl: 'partials/evento.html',
            controller: 'EventoController'
        });
        $routeProvider.when('/user/criarevento', {
            templateUrl: 'partials/criarEvento2.html',
            controller: 'CriarEventosController'
        });
        $routeProvider.when('/user/editarevento/:eventoId', {
            templateUrl: 'partials/editarEvento.html',
            controller: 'EditarEventosController'
        });
        $routeProvider.when('/user/usuario/:usuarioId', {
            templateUrl: 'partials/usuario.html',
            controller: 'UsuarioController'
        });
        $routeProvider.when('/user/descobrir', {
            templateUrl: 'partials/descobrir.html',
            controller: 'DescobrirController'
        });
        $routeProvider.when('/user/pesquisar', {
            templateUrl: 'partials/pesquisar.html',
            controller: 'PesquisarController'
        });
        $routeProvider.when('/user/editarEndereco', {
            templateUrl: 'partials/editarEndereco.html',
            controller: 'EditarEnderecoController'
        });
        $routeProvider.when('/user/seusEventos', {
            templateUrl: 'partials/seusEventos.html',
            controller: 'SeusEventosController'
        });
        //obrigando o usuario a ser redirecionado para '/'
        $routeProvider.otherwise({ redirectTo: '/home' });
    });