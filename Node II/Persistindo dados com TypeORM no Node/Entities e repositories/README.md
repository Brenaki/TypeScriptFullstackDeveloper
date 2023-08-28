# Entities e Repositories

Na primeira aula nós começamos falando sobre o que é Entities e Repositories.
	- Entities são o tipo de objetos que queremos indicar para pode salvar no nosso banco de dados.
	- Repositories são aonde podemos colocar nossos métodos configurados para nós fazermos a manipulação no nosso banco de dados.
Ela fez criarmos dois arquivos, aonde um nos definimos o que deve entrar como dados e outro para fazer a função de salvar, igual o Controller e o Service que foi utilizado anteriormente.

Na segunda aula, a Nathally começa falando que nessa aula vamos fazer um teste unitário para testarmos o Repositories. Esse teste foi importante para entender mais como funciona os testes unitários e observar como é importante testar antes de ver a aplicação rodando.

Na terceira aula, a Nathally começou refatorando o services para nós alterarmos as funcionalidades agora com Banco de dados. E realizamos o mock para o service.

Na quarta aula descobrimos o erro do AppDataSource e corrigimos e além disso refatoramos o Controller.
Com essa aula nós mockamos o UserService para não estourar erros enquanto testamos e assim conseguimos executar os teste no nosso banco de dados tranquilamente.