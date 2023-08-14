Conhecendo o Node e Métodos HTTP

	Na primeira aula, Nathally explica o que é o Node? Responde de forma rápida que é um software de código aberto, que permite a execução do JavaScript fora do navegador web.
	Ela explica que vamos trabalhar e o Node em si, é um modelo single theard. O que isso significa? Que mesmo duas pessoas mandando simultaneamente uma requisição, o programa irá empilhar as execuções e executar 1 por vez, como uma pilha na programação.
	
	Na segunda aula, Nathally começa a explicar o que é um método HTTP, e já inicia falando sobre o método Get(que pega dados da aplicação). Mas ela explica dos outros métodos, como Post(que insere um dado na aplicação), Put/Patch(PUT atualiza todos os dados de um usuário em uma aplicação, enquanto o PATCH atualiza dados parcialmente. Ex: usuário quer atualizar seu nome, temos que usar o patch para isso), e o Delete(que deleta os dados da aplicação).
	Ela também fala sobre os Status code, que são mais de 500 status code.
	Uma citações nos sites:
	1. 2XX - Sucesso - sendo quando tudo está ocorrendo normal, as requisições estão corretas e o servidor operante.
	2. 4XX - Erros do cliente - quando o cliente manda um dado errado ou uma requisição errada, por ocasionar um erro 4XX.
	3. 5XX - Erros do servidor - quando o servidor cai ou algo dentro do servidor parou de funcionar.

Criando nossa aplicação 

	Na primeira aula, Nathally ensinou a instalar as primeiras coisa essenciais para desenvolver com Node.Js, também explicou que termos que buildar a aplicação, porque Node só roda em JavaScript.
	
	Na segunda aula, Nathally explicou que usaremos a biblioteca express para desenvolver a nossa API e já trouxe dois métodos que usaremos bastante.
		- Get: Que pega um dado ou mostra um dado
		- Post: Que no caso da aplicação da API está criando um usuário
	
	Na terceira aula, Nathally pediu para criar um arquivo "UserController.ts" para validar os dados que serão enviados pelo usuário. Para confirmar que os dados foram preenchidos corretamente.
	
	Na quarta aula, Nathally pediu para criar um arquivo "UserService.ts" para manipular os dados que iremos inserir no Banco de Dados. Duvida: Porque não fazemos isso no "UserController"? Porque é muito código em um arquivo só e também que por boas práticas é bom deixar um arquivo só para validação e outro para inserção de dados. E ao fim da aula ela desenvolve uma função de "Get" que mostra todos os usuários que estão no Banco de Dados, e bem rapidamente pede para criarmos um arquivo "routes.ts" para dividirmos as rotas da nossa API.
	
	Na quinta aula, Nathally fala sobre o arquivo "routes.ts" que é o nosso ponto de rotas, um arquivo especifico para termos contato com o arquivo de validação. Dessa forma a aplicação fica mais leve e melhor para o usuário interagir. Ela também fala que podemos desenvolver rotas para o mesmo local, porém com métodos diferentes, Ex: tenho um método "Post" que está criando um usuário na rota "/user" e ao mesmo tempo eu tenho na mesma rota um método "Get" que está mostrando todos os dados desse usuário. 
	
	Em resumo, nos fizemos a configuração do nosso package.json, entendemos porque a gente vai construir os script dentro dele, entendo que ele tem impacto na hora de buildar, que é o momento que a aplicação estará disponível para o nosso usuário. Vimos a respeito das dependências de desenvolvimento que são instaladas no momento que estamos rodando nossa aplicação para desenvolver, para fazer implementação de código e essas dependências que estão fora da "dev dependecies" são as que serão instaladas para nosso usuário. Nos conhecemos a forma de desenvolver o nosso projeto.
		- Index.ts - Nos temos apenas as configurações do nosso projeto;
		- Routes.ts - Nos centralizamos dentro do arquivo todas as rotas que temos para nosso usuários;
		- UserController.ts - Nos usamos ele para validamos tudo que está sendo referente pelo usuário;
UserService.ts - Nos usamos para manipular regras de negócios, manipular Banco de Dados.