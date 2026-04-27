import { Servico } from "./servico";

export abstract class ServicoDecorator implements Servico {
  constructor(protected servico: Servico) {}

  abstract getDescricao(): string
  abstract getCusto(): number
}