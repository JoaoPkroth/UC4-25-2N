import { Servico } from "./servico"
import { ServicoSimples } from "./servicoSimples"
import { Urgencia } from "./urgencia"
import { Bonus } from "./bonus"
import { EntregaPrioritaria } from "./entregaPrioritaria"
import { Freelancer } from "./freelancer"
import { Feedback } from "./feedback"

let servico: Servico = new ServicoSimples("Criação de logo", 100)

servico = new Urgencia(servico)
servico = new Bonus(servico)
servico = new EntregaPrioritaria(servico)

const freelancer = new Freelancer("João")

freelancer.adicionarServico(servico)

freelancer.adicionarFeedback(new Feedback("Muito bom!", 5))
freelancer.adicionarFeedback(new Feedback("Entrega rápida", 4))
freelancer.adicionarFeedback(new Feedback("Poderia melhorar", 3))

freelancer.mostrarServicos()
freelancer.mostrarFeedbacks()

console.log("Média: " + freelancer.calcularMedia())