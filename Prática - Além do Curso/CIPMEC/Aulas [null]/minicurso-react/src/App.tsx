import { Plan } from "./components/Plan"
import { Title } from "./components/Title"

export const App = () => {
  return (
    <div className="bg-neutral-900  p-8">
      <Title text={"Selecione seu plano"}/>
      <div className="p-16 justify-center gap-8 flex">

      <Plan text="Plano Silver" description="Perfeito para iniciantes" value={29.99} best={false} type="silver" feature={[
        "Ferramentas básicas",
        "Projetos individual",
        "Suporte 24/7"
      ]}/>

      <Plan text="Plano Gold" description="Perfeito para equipes" value={39.99} best={true} type="gold" feature={[
        "Ferramentas básicas",
        "Ferramentas avançadas",
        "Projetos equipes",
        "Suporte 24/7"
      ]}/>

      <Plan text="Plano Diamond" description="Perfeito para empresas" value={79.99} best={false} type="diamond" feature={[
        "Ferramentas básicas",
        "Ferramentas avançadas",
        "Projetos empresas",
        "Acesso Ilimitado",
        "API dísponivel 24/7",
        "Suporte 24/7"
      ]}/>

      </div>
      <Title text="Informe seu email"/>
    </div>
  )
}