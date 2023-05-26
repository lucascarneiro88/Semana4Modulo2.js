class Conta {
    constructor(senha) {
      // Inicializa o saldo com 0 e armazena a senha fornecida
      this._saldo = 0;
      this._senha = senha; // O prefixo "_" indica que o atributo é privado tamebm pode "#" apartir do ECMAScript 2022 
      this.transacoes = []; // Inicializa o array de transações
    }
  
    deposito(valor, senha) {
      // Verifica se a senha fornecida é igual à senha da conta
      if (senha === this._senha) {
        // Adiciona o valor ao saldo da conta
        this._saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log('Senha incorreta. Depósito não autorizado.');
      }
    }
  
    retirada(valor, senha) {
      // Verifica se a senha fornecida é igual à senha da conta
      if (senha === this._senha) {
        // Verifica se o valor a ser retirado é menor ou igual ao saldo disponível
        if (valor <= this._saldo) {
          // Subtrai o valor do saldo da conta
          this._saldo -= valor;
          console.log(`Retirada de R$${valor} realizada com sucesso.`);
        } else {
          console.log('Saldo insuficiente. Retirada não autorizada.');
        }
      } else {
        console.log('Senha incorreta. Retirada não autorizada.');
      }
    }
    extrato() {
      console.log('Extrato:');
      for (const transacao of this.transacoes) {
        console.log(transacao);
      }
      console.log(`Saldo: R$${this._saldo}`);
    }
    redefinirSenha(novaSenha, senhaAtual) {
      if (senhaAtual === this._senha) {
        this._senha = novaSenha;
        console.log('Senha redefinida com sucesso.');
      } else {
        console.log('Senha atual incorreta. Redefinição de senha não autorizada.');
      }
    }
  }
  
  // Instanciando um objeto contaCorrente com senha '123456'
  const contaCorrente = new Conta('015898');
  
  // Testando operações na contaCorrente
contaCorrente.deposito(100, '015898'); // Depósito de R$100 realizado com sucesso.
contaCorrente.retirada(50, '015898'); // Retirada de R$50 realizada com sucesso.
contaCorrente.retirada(200, '015898'); // Saldo insuficiente. Retirada não autorizada.
  contaCorrente.deposito(50, '985632'); // Senha incorreta. Depósito não autorizado.
  contaCorrente.redefinirSenha('987654', '015898'); // Senha redefinida com sucesso.
  contaCorrente.extrato(); // Exibe o extrato da conta
  