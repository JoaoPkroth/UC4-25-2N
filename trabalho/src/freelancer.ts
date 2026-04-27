import { Servico } from "./servico"
import { Feedback } from "./feedback"

export class Freelancer {
  nome: string;
  servicos: Servico[] = []
  feedbacks: Feedback[] = []

  constructor(nome: string) {
    this.nome = nome
  }

  adicionarServico(servico: Servico) {
    this.servicos.push(servico)
  }

  adicionarFeedback(feedback: Feedback) {
    this.feedbacks.push(feedback)
  }

  mostrarServicos() {
    console.log("Serviços de " + this.nome + ":")

    for (let s of this.servicos) {
      console.log(s.getDescricao() + " - R$ " + s.getCusto())
    }
  }

  mostrarFeedbacks() {
    console.log("Feedbacks:")

    for (let f of this.feedbacks) {
      console.log("Nota: " + f.nota + " | " + f.comentario)
    }
  }

  calcularMedia() {
    let soma = 0

    for (let f of this.feedbacks) {
      soma += f.nota
    }

    if (this.feedbacks.length === 0) {
      return 0
    }

    return soma / this.feedbacks.length
  }
}