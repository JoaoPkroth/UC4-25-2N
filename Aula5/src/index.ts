/*
Cite 3 exemplos do mundo real que poderiam ser representados com herança (ex: Veículo → Carro/Moto).
Qual a diferença entre classe pai e classe filha?
Pesquise: em quais linguagens além do TypeScript existe herança em POO?


Prática
Crie uma classe com:Pessoa
atributo .nome
método .apresentar()
Depois crie duas classes filhas:

Professor (com método ).ensinar()
Aluno (com método ).estudar()
Crie objetos de cada e teste seus métodos.

Crie uma classe com:Funcionario
.nomesalario
método .mostrarSalario()
Depois crie as classes filhas:

Gerente (com método ).aumentarSalario()
Estagiario (com método ).receberAjudaDeCusto() 
*/

/*
Animal → Cachorro / Gato
Veículo → Carro / Moto
Pessoa → Professor / Aluno

A classe pai (ou superclasse) é a base, contendo atributos e métodos gerais que podem ser reutilizados.
A classe filha (ou subclasse) herda essas características e pode adicionar novos comportamentos ou modificar os existentes.

Java
C++
C#
Ruby
Python
PHP
*/

// Classe base Pessoa
class Pessoa {
    nome: string
  
    constructor(nome: string) {
      this.nome = nome
    }
  
    apresentar(): void {
      console.log(`Olá, meu nome é ${this.nome}`)
    }
  }
  
  // Classe Professor herda de Pessoa
  class Professor extends Pessoa {
    ensinar(): void {
      console.log(`${this.nome} está ensinando`)
    }
  }
  
  // Classe Aluno herda de Pessoa
  class Aluno extends Pessoa {
    estudar(): void {
      console.log(`${this.nome} está estudando`)
    }
  }
  
  // Testando Pessoa, Professor e Aluno
  const professor = new Professor("Carlos")
  professor.apresentar()
  professor.ensinar()
  
  const aluno = new Aluno("João")
  aluno.apresentar()
  aluno.estudar()
  
  
  // Classe base Funcionario
  class Funcionario {
    nome: string
    salario: number
  
    constructor(nome: string, salario: number) {
      this.nome = nome
      this.salario = salario
    }
  
    mostrarSalario(): void {
      console.log(`${this.nome} ganha R$${this.salario}`)
    }
  }
  
  // Classe Gerente herda de Funcionario
  class Gerente extends Funcionario {
    aumentarSalario(valor: number): void {
      this.salario += valor
      console.log(`Novo salário: R$${this.salario}`)
    }
  }
  
  // Classe Estagiario herda de Funcionario
  class Estagiario extends Funcionario {
    receberAjudaDeCusto(valor: number): void {
      console.log(`${this.nome} recebeu ajuda de custo de R$${valor}`)
    }
  }
  
  // Testando Funcionario, Gerente e Estagiario
  const gerente = new Gerente("Ana", 5000)
  gerente.mostrarSalario()
  gerente.aumentarSalario(1000)
  
  const estagiario = new Estagiario("Lucas", 1500)
  estagiario.mostrarSalario()
  estagiario.receberAjudaDeCusto(300)
