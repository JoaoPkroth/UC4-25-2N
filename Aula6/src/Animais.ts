/*Crie uma classe Animal com o método falar().
Faça subclasses (Cachorro, Gato, Pássaro) que sobrescrevem o método de forma diferente.
*/

// Classe Animal

class animais {
  constructor(public animal: string) {}

  falar(): void {
    console.log(`${this.animal} O animal fez um som`)
  } 
}

class cachorro extends animais {
  falar(): void {
    console.log(`${this.animal} O cachorro latiu: au au`)
  }
}

class gato extends animais {
  falar(): void {
      console.log(`${this.animal} O gato miou: miau miau`)
  }
}