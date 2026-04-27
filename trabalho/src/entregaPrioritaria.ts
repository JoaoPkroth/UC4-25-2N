import { ServicoDecorator } from "./servicoDecorator"

export class EntregaPrioritaria extends ServicoDecorator {
  getDescricao(): string {
    return this.servico.getDescricao() + " + Entrega Prioritária"
  }

  getCusto(): number {
    return this.servico.getCusto() + 40
  }
}