# Resolução exercícios seman 4 do modulo 2 JS

# Execício 1 
=> Crie uma classe chamada Person que receba atributos nome, idade e altura, e um método apresentar que imprima: 'Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura'.

=> Crie uma classe que herde atributos e métodos da classe Person, adicione o método profissao, e reescreve o método apresentar para imprimir ‘Olá me chamo ${nome} tenho ${idade} anos e tenho ${altura} de altura e sou ${profissao}’.

# Execício 2
#OBS: foi adcionado um método para redefinir senha que não estava descrito no exercicio.
=> Um banco contratou você para criar uma classe que opere as contas do banco utilizando orientação a objetos.

=> Crie uma classe chamada Conta

=> A classe conta recebe dois atributos: saldo e senha(privado), e dois métodos deposito e retirada. o método deposito adiciona valor ao saldo (o usuário deve passar a senha, e ela deve ser igual à senha determinada no atributo), e o depósito retira valor do saldo.

=> Por fim, instancie um objeto chamado contaCorrente e teste as operações.

# Execício 3 
#OBS: foi adcionado método de selecionar a forma de pagamento (dinheiro,cartão credito,cartão débito) que não estava descrita no exercício.
=> O seu Manoel gostou do último aplicativo e agora quer inovar.

=> Ele quer que você construa a aplicação utilizando orientação a objetos.

=> Construa uma classe chamada CaixaRegistradora

=> Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos:
[{
codigoBarra:number;
preco:number;
nome:string;
}]
=> Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque. Esse método recebe os mesmos campos do produto, e todos eles são obrigatórios.

=> Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar.

=> Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar itens na caixa registradora. **Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.

=> Defina um método que você consiga verificar o valor total da conta do cliente.

=> Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.

# Execício 4
=> Criar um sistema de cadastro de funcionários utilizando classes, herança, atributos e polimorfismo.

Instruções:
=> Crie uma classe base chamada "Funcionario" que possua os seguintes atributos: nome, idade e salário.

=> Crie métodos na classe "Funcionario" para retornar e atualizar os valores dos atributos.

=> Crie uma classe chamada "Gerente" que herde da classe "Funcionario". Adicione um atributo adicional chamado "departamento" à classe "Gerente".

=> Implemente os métodos da classe "Gerente" para retornar e atualizar o valor do atributo "departamento".

=> Crie uma classe chamada "Programador" que também herde da classe "Funcionario". Adicione um atributo adicional chamado "linguagem" à classe "Programador".

=> Implemente os métodos da classe "Programador" para retornar e atualizar o valor do atributo "linguagem".

=> Crie objetos das classes "Gerente" e "Programador" e preencha os atributos com valores de exemplo.

=> Exiba os detalhes de cada funcionário, incluindo nome, idade, salário e atributos adicionais específicos de cada classe.
