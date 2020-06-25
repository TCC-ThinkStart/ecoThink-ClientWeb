angular.module('minhasDiretivas', [])
    .directive('meuFocus', function () {

        let ddo = {};

        //restrião -> Atributo 
        ddo.restrict = "A";

        ddo.scope = {
            /*
             * @ valor que for passado dentro do atributo 
             * & indicando que sera passado uma expressao 
             * = permite que qualquer alteracao na propriedade sera avisado pelo controller 
            */
            focado: '='
        }

        ddo.link = function (scope, element) {
            /*
            *   $watch sao observers = observadores
                ele verifica e observa o parametro selecionado e executa uma função 
             * */
            // scope.$watch('focado',function(){
            //     if(scope.focado) {
            //         element[0].focus();
            //         scope.focado = false;
            //     };
            // });
            scope.$on('fotoPerfilCadastrada', function () {
                element[0].focus();
            });
        };

        return ddo;
    })