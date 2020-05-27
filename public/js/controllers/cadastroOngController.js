angular.module('ecothink').controller('CadastroOngController',function($scope,$http,$location,$window,$rootScope){
   

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
            
        }else{
            
            return true
        }
        
    }
    $scope.submeter = (usuario)=>{
        $http.post('http://localhost:4200/login',usuario)
        .then(results=>{
            if(results.data.auth == true){
                window.location.href  = '/user/perfil';
            
            }else if(results.data.auth == false) {
                window.location.href  = '/home/cadastro';
               
            
            }else{
                console.log('nao entrou em nenhum if')
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }
});