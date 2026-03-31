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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome));
    };
    return Pessoa;
}());
// Classe Professor herda de Pessoa
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.ensinar = function () {
        console.log("".concat(this.nome, " est\u00E1 ensinando"));
    };
    return Professor;
}(Pessoa));
// Classe Aluno herda de Pessoa
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aluno.prototype.estudar = function () {
        console.log("".concat(this.nome, " est\u00E1 estudando"));
    };
    return Aluno;
}(Pessoa));
// Testando Pessoa, Professor e Aluno
var professor = new Professor("Carlos");
professor.apresentar();
professor.ensinar();
var aluno = new Aluno("João");
aluno.apresentar();
aluno.estudar();
// Classe base Funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.mostrarSalario = function () {
        console.log("".concat(this.nome, " ganha R$").concat(this.salario));
    };
    return Funcionario;
}());
// Classe Gerente herda de Funcionario
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gerente.prototype.aumentarSalario = function (valor) {
        this.salario += valor;
        console.log("Novo sal\u00E1rio: R$".concat(this.salario));
    };
    return Gerente;
}(Funcionario));
// Classe Estagiario herda de Funcionario
var Estagiario = /** @class */ (function (_super) {
    __extends(Estagiario, _super);
    function Estagiario() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Estagiario.prototype.receberAjudaDeCusto = function (valor) {
        console.log("".concat(this.nome, " recebeu ajuda de custo de R$").concat(valor));
    };
    return Estagiario;
}(Funcionario));
// Testando Funcionario, Gerente e Estagiario
var gerente = new Gerente("Ana", 5000);
gerente.mostrarSalario();
gerente.aumentarSalario(1000);
var estagiario = new Estagiario("Lucas", 1500);
estagiario.mostrarSalario();
estagiario.receberAjudaDeCusto(300);
