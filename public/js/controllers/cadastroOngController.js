angular.module('ecothink').controller('CadastroOngController',function($scope,$http,$location,$window,$rootScope){
    console.log('entrou no controller de cadastro da ong');

    $rootScope.isLogin = false;
    $rootScope.isDark = true; 

    $rootScope.isUser =false;


    $scope.submitar = (usuario)=>{
        if(usuario.nome && usuario.email && usuario.senha && usuario.confirmar && usuario.cnpj){
            if(usuario.senha === usuario.confirmar){
                $scope.isValid = true;
                return false
            }else{
                return true
            }
           console.log(usuario)
            
        }else{
            
            return true
        }
        
    }
});