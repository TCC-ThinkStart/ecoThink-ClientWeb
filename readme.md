# Requests Necessarios para a API !

Vou separar por dois setores , ou tipos de usuarios.
Os usuarios existentes são dois : 
- Usuario Comum
- Usuario Administrativo

## Usuario Comum

As paginas em que o usuario comum poderá acessar é:

- Inicio
- Login
- Cadastro
- Perfil
- Pesquisa
- home(pagina da home do usuario logado)
- Evento
- Descobrir
- Ver Usuario/ONG´s

A maioria das paginas irá se comunicar ao servidor por requisições _HTTP_.
Vou dividir cada bloco para a as informações de requisições na qual será comunicado.

### Pagina Login
![Login](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/login.png)

Na Pagina de login será enviado ao backend um objeto de _usuario_ , esse objeto de usuario 
contem todas as informações do mesmo , passado pelos _inputs_ , ou seja, existem duas informações
de dados:
    
- Email 
- Senha

E apos efetuado um login de sucesso será repassado essas informações para o Cliente 

- Auth
- Token

mais ou menos como o exemplo desse codigo :

> auth: true, token: iejfiwejfi39393838djfndjkskjn23jkn

### Pagina Cadastro de Usuario 
![cadastroUsu](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/cadastroUsu.png)


