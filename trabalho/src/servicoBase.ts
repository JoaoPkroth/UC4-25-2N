import { Servico } from "./servico"

export abstract class ServicoBase implements Servico {
  constructor(protected nome: string, protected valor: number) {}

  getDescricao(): string {
    return this.nome
  }

  getCusto(): number {
    return this.valor
  }
}