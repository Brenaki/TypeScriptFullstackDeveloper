import { Plan } from "./components/Plan"
import { Title } from "./components/Title"

export const App = () => {
  return (
  <div className="bg-gray-900 h-screen w-screen p-12">
    <Title text="Selecione seu plano"/>
    <div className="flex justify-center gap-8">
    <Plan best={false} type="silver" features={[
      "Ferramentas básicas",
      "Projetos individual",
      "Suporte 24/7"
    ]} />
    <Plan best={true} type="gold" features={[
      "Ferramentas básicas",
      "Ferramentas avançadas",
      "Projetos equipes",
      "Suporte 24/7"
    ]} />
    <Plan best={false} type="diamond" features={[
      "Ferramentas básicas",
      "Ferramentas avançadas",
      "Projetos empresas",
      "Acesso Ilimitado",
      "API dísponivel 24/7",
      "Suporte 24/7"
    ]} />
    </div>
    <Title text="Informe seu email"/>
  </div>
  )
}