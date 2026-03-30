/*
class Mago {
    private energia: number;
  
    constructor() {
      this.energia = 100;
    }
  
    public conjurarMagia(): void {
      if (this.energia >= 30) {
        this.energia -= 30;
        console.log("O mago lançou uma poderosa magia!");
      } else {
        console.log("Energia insuficiente!");
      }
    }
  
    public descansar(): void {
      this.energia = 100;
      console.log("O mago descansou e recuperou sua energia.");
    }
  
    public mostrarEnergia(): void {
      console.log(`Energia atual: ${this.energia}`);
    }
  }
  
  const gandalf = new Mago();
  
  gandalf.conjurarMagia();
  gandalf.mostrarEnergia();
  gandalf.descansar();
  */
var Hobbit = /** @class */ (function () {
    function Hobbit(idadeInicial) {
        this.idade = idadeInicial;
    }
    Hobbit.prototype.fazerAniversario = function () {
        this.idade++;
    };
    Hobbit.prototype.mostrarIdade = function () {
        console.log("Idade do hobbit:", this.idade);
    };
    return Hobbit;
}());
// Teste
var frodo = new Hobbit(50);
frodo.mostrarIdade();
frodo.fazerAniversario();
frodo.mostrarIdade();
var EspadaElfica = /** @class */ (function () {
    function EspadaElfica() {
        this.durabilidade = 100;
    }
    EspadaElfica.prototype.usar = function () {
        this.durabilidade -= 10;
        if (this.durabilidade < 0) {
            this.durabilidade = 0;
        }
    };
    EspadaElfica.prototype.reparar = function () {
        this.durabilidade += 20;
        if (this.durabilidade > 100) {
            this.durabilidade = 100;
        }
    };
    EspadaElfica.prototype.mostrarDurabilidade = function () {
        console.log("Durabilidade:", this.durabilidade);
    };
    return EspadaElfica;
}());
// Teste
var espada = new EspadaElfica();
espada.mostrarDurabilidade();
espada.usar();
espada.mostrarDurabilidade();
espada.reparar();
espada.mostrarDurabilidade();
