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

Bom , aplicada esta regra de negocios e usuario Corretamente Autenticado Pelo _Login_ o controller
desta pagina é responsavel por injetar informações comunicando que o usuario esta devidamente logado
e inserindo essas informações do usuario por cookies ou dados salvos por localStorage

### Pagina Cadastro de Usuario 
![cadastroUsu](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/cadastroUsu.png)

Na Pagina de cadastro de usuario será enviado um objeto de _usuario_ , esse objeto de usuario 
contem as informações passadas pelos _inputs_ , ou seja , existem  informações de dados:

- Nome
- Nascimento(data)
- Email 
- Senha

apos efetuado um cadastro de sucesso será repassado informações de codigo para o Cliente Web
informando que o cadastro foi efetuado com sucesso 

### Pagina Cadastro de Ong
![cadastroOng](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/cadastroOng.png)


Na Pagina de cadastro de ong será enviado um objeto de _usuario_ , esse objeto de usuario 
contem as informações passadas pelos _inputs_ , ou seja , existem  informações de dados:

- Nome
- CNPJ
- Email 
- Senha

e tambem contém informações passadas _inputs_ que são de endereço , essas informações tambem estão
no objeto de _usuario_ , essas informaçoes de endereço são :

- Endereço
- Bairro
- Nº

apos efetuado um cadastro de sucesso será repassado informações de codigo para o Cliente Web
informando que o cadastro foi efetuado com sucesso e redirecionando ele para a o Login !

### Pagina Perfil 
![Perfil](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/perfil.png)

Na Pagina de perfil percebemos uma coisa , a rota para a navegação mudou , e com isso é aplicado
uma regra de negocios da aplicação e todas as rotas com _user_ é aplicada esta regra de negocios

> Toda pagina no qual tem o _user_ na rota, o usuario precisa estar logado , caso não esteja , o mesmo será redirecionado para a rota de _login_ para autenticar sua solicitação

Consumindo dados gerados por localStorage , a pagina de perfil pode redirecionar para edição de perfil ou para criação de eventos.
Na mesma pagina o usuario , ele poderá editar sua senha para uma nova na sua escolha , com isso , 
será ativado uma requisição HTTP _put_ enviando um objeto de _usuario_ com as seguintes informações:

- Nome
- Email
- Senha Nova

para a atualização desses dados no servidor.

### Pagina Descobrir 
![Descobrir](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/descobrir.png)

Nesta Pagina  o controller da pagina no momento que carregar vai solicitar uma requisição HTTP _get_
para o Servidor , solicitando 10 eventos em ordem aleatoria , porem esses eventos em ordem aleatoria,deverao ser do mesmo estado na qual o usuario tem registrado no seu endereço.
Depois de receber os dados aleatorios dos eventos , a pagina irá mostrar esses dados de maneira dinamica na tela.

### Pagina Eventos

![Eventos](https://raw.githubusercontent.com/TCC-ThinkStart/ecoThink-ClientWeb/master/public/screenshoot/eventos.png)

Nesta Pagina , quando o Controller de Eventos for solicitado , irá disparar uma solicitação de
HTTP _get_ para o Servidor,soliciando 10 eventos com paginação .
Caso o Usuario quiser visualizar mais eventos , no final da pagina tem um botao para visualizar mais eventos ,assim vai disparar mais uma solicitação http mudando a paginação e solicitando 
mais 10 eventos.