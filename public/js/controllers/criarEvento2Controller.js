angular.module('ecothink').controller('CriarEventos2Controller', function ($scope, $rootScope, $http, recursoLogin, cadastroDeEventos) {
    recursoLogin.verify;
    $rootScope.isLogin = false;



    let event = []
    event = JSON.parse(sessionStorage.getItem('event')) || [];
    $scope.evento = event;

    console.log($scope.evento)

    $scope.SelectFile = (e) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const valida = e.target.result.indexOf('data:image/')

            if (valida == 0) {
                //encriptada
                $scope.PreviewImage = e.target.result;
                $scope.$apply();
            } else {
                alert('favor insira uma imagem')
            }


        };

        reader.readAsDataURL(e.target.files[0]);

    };

    $scope.enviar = (events) => {




        event.push(events)

        sessionStorage.setItem('event', JSON.stringify(event));

        $scope.evento = event


    }
    $scope.inserir = () => {
        //capturando todos os dados do sessionStorage
        $scope.eventoEnviar = $scope.evento[0]
        $scope.eventoEnviar.cep = $scope.evento[1].cep
        $scope.eventoEnviar.logradouro = $scope.evento[1].logradouro
        $scope.eventoEnviar.bairro = $scope.evento[1].bairro
        $scope.eventoEnviar.numero = $scope.evento[1].numero

        $scope.eventoEnviar.foto = { base64: $scope.PreviewImage }
        console.log($scope.eventoEnviar)


        sessionStorage.clear()

    }
}); 