import { Plan, Title } from "./components/Plan"

export const App = () => {
  return (
    <div className="bg-gray-700 h-screen p-8">
      <Title text={"Selecione seu plano"}/>
      <div className="p-16 justify-center items-center gap-16 flex">
      <Plan text="Plano Silver" description="Perfeito para iniciantes" value={29.99} type="text-zinc-300" vetor={["Ferramentas básicas", "Projetos individuais", "Suporte 24/7"]}/>
      <Plan text="Plano Gold" description="Perfeito para equipes" value={39.99} type="text-yellow-400" vetor={["Ferramentas básicas", "Ferramentas avançadas", "Projetos em equipes", "Suporte 24/7 "]}/>
      <Plan text="Plano Diamond" description="Perfeito para empresas" value={79.99} type="text-cyan-400" vetor={["Ferramentas básicas", "Ferramentas avançadas", "Projetos em equipes", "Acesso ilimitado", "API disponível"]}/>
      </div>
      <Title text="Informe seu email"/>
    </div>
  )
}