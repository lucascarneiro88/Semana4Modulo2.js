// Definindo a classe Person
class Person {
  // Construtor que recebe nome, idade e altura
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  // Método para apresentar a pessoa
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e ${this.altura} de altura.`);//é (return),maspara imprimir no cosole usei console.log
  }
}

// Definindo a classe PersonWithProfession que herda de Person
class PersonWithProfession extends Person {
  // Construtor que recebe nome, idade, altura e profissao
  constructor(nome, idade, altura, profissao) {
    // Chamando o construtor da classe pai (Person) usando super()
    super(nome, idade, altura);
    this.profissao = profissao;
  }

  // Método para apresentar a pessoa com a profissao
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}.`);//é (return),maspara imprimir no cosole usei console.log
  }
}

// Criando uma instância da classe Person
const pessoa1 = new Person('Lucas', 35, 1.7);
pessoa1.apresentar(); // Saída: Olá, meu nome (nome), tenho (idade) anos e (metros)de altura.

// Criando uma instância da classe PersonWithProfession
const pessoa2 = new PersonWithProfession('Francisca', 25, 1.65, 'Advogada');
pessoa2.apresentar(); // Saída: Olá, meu nome (nome), tenho (idade) anos e (metros)de altura , (profissão)
