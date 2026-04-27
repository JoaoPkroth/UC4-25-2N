import { ServicoDecorator } from "./servicoDecorator"

export class Bonus extends ServicoDecorator {
  getDescricao(): string {
    return this.servico.getDescricao() + " + Bônus"
  }

  getCusto(): number {
    return this.servico.getCusto() + 30
  }
}