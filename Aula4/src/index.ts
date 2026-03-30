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


  class Hobbit {

    private idade: number
  
    constructor(idadeInicial: number) {
      this.idade = idadeInicial
    }
  
    fazerAniversario() {
      this.idade++
    }
  
    mostrarIdade() {
      console.log("Idade do hobbit:", this.idade)
    }
  }
  
  const frodo = new Hobbit(50)
  
  frodo.mostrarIdade()
  frodo.fazerAniversario()
  frodo.mostrarIdade()



  class EspadaElfica {

    private durabilidade: number
  
    constructor() {
      this.durabilidade = 100
    }
  
    usar() {
      this.durabilidade -= 10
  
      if (this.durabilidade < 0) {
        this.durabilidade = 0
      }
    }
  
    reparar() {
      this.durabilidade += 20
  
      if (this.durabilidade > 100) {
        this.durabilidade = 100
      }
    }
  
    mostrarDurabilidade() {
      console.log("Durabilidade:", this.durabilidade)
    }
  }

  const espada = new EspadaElfica()
  
  espada.mostrarDurabilidade()
  espada.usar()
  espada.mostrarDurabilidade()
  espada.reparar()
  espada.mostrarDurabilidade()