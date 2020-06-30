angular.module('ecothink').controller('CriarEventos2Controller', function ($scope, $rootScope, $http, recursoLogin, cadastroDeEventos) {
    recursoLogin.verify;
    $rootScope.isLogin = false;



    let event = []
    event = JSON.parse(sessionStorage.getItem('event')) || [];
    $scope.evento = event;

    console.log($scope.evento)



    $scope.enviar = (events) => {




        event.push(events)

        sessionStorage.setItem('event', JSON.stringify(event));

        $scope.evento = event


    }
    $scope.inserir = () => {

        $scope.eventoEnviar = $scope.evento[0]
        $scope.eventoEnviar.cep = $scope.evento[1].cep
        $scope.eventoEnviar.logradouro = $scope.evento[1].logradouro
        $scope.eventoEnviar.bairro = $scope.evento[1].bairro
        $scope.eventoEnviar.numero = $scope.evento[1].numero
        console.log($scope.eventoEnviar)


        sessionStorage.clear()

    }
}); 