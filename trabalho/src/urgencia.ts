import { ServicoDecorator } from "./servicoDecorator"

export class Urgencia extends ServicoDecorator {
  getDescricao(): string {
    return this.servico.getDescricao() + " + Urgência"
  }

  getCusto(): number {
    return this.servico.getCusto() + 50
  }
}