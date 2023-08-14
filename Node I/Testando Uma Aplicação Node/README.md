# Testes unitários

Na primeira aula, a Nathally começou explicando os fundamentos e como iremos fazer os testes unitários. Dizendo que vamos desenvolver os testes para não ficarmos testando cada funcionalidade um por um na nossa aplicação. Nisso precisamos instalar algumas dependências de desenvolvedor:
	- Instalamos o jest - "npm i -D jest"
	- O ts-jest "npm i -D ts-jest"
	- O @types/jest "npm i -D @types/jest"
Após instalar todas essas dependências precisamos inicializa-las e configura-las para assim, começarmos a desenvolver nossos testes unitários.
Quando inicializamos o jest, com "npx jest --init", ele faz as seguintes perguntas:
	√ Would you like to use Jest when running "test" script in "package.json"? ... yes
	√ Would you like to use Typescript for the configuration file? ... yes
	√ Choose the test environment that will be used for testing » node
	√ Do you want Jest to add coverage reports? ... no
	√ Which provider should be used to instrument code for coverage? » v8
	√ Automatically clear mock calls, instances, contexts and results before every test? ... Yes
As respostas estão logo após a pergunta, e quando finalizamos a pergunta ele cria um arquivo chamado "jest.config.ts" aonde estão as configuração do jest.
Depois de configurarmos, criamos um arquivo em Service, com o nome "UserService.spec.ts" para testarmos o nosso "UseService.ts" e com isso verificarmos se está sendo executado e retornando corretamente o que foi programado.

img1

Com esse código1 na primeira aula nós conseguimos testar o nosso arquivo Service, que passou no testei2

Na segunda aula, a Nathally explicou que não vamos fazer testes diretamente no nosso banco de dados, e sim, numa espécie de "cópia", até mesmo por segurança e para manter a integridade do banco de dados. Ela disse que vamos criar o método construtor na nossa classe "userService", e um atributo chamado "db", do Tipo Array.  Assim nós desenvolvemos um banco de dados interno só para testarmos a aplicação.

Na terceira aula, a Nathally criou mais um arquivo para podemos desenvolver um teste para o controller. Essa aula nós mockamos o Response e o Request e verificamos se o usuário está sendo criado.

# Testes e2e

Na única aula que tive sobre esse tema, a Nathally explica que um teste end to end passa por toda aplicação, desde ir levantar aplicação até testar suas funcionalidades. Nessa aula foi mais explicado como funciona os testes E2E, mas não foi mostrado na prática.
