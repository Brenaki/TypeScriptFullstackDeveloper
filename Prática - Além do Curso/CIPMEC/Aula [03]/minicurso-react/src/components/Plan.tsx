import { Diamond } from "phosphor-react"
import { Feature } from "./Feature"

interface PlanProps {
    features: string[]
    type: "silver" | "gold" | "diamond",
    best: boolean
}

export const Plan = ({features, type, best}: PlanProps) => {

    let color = "text-zinc-300"

    switch (type) {
        case "silver":
            color = "text-zinc-300"
            break
        case "gold":
            color = "text-yellow-300"
            break
        case "diamond":
            color = "text-cyan-300"
            break
    }

    return (
        <div className={`w-80 p-8 bg-neutral-800 rounded-tl-3xl rounded-tr-2xl rounded-bl-2xl rounded-br-3xl border ${best ? "border-violet-600":"border-zinc-500"} flex-col justify-start items-center gap-8 inline-flex`}>
  {
    best && <div className="-translate-y-[42px] absolute">
        <span className="bg-violet-600 rounded-md text-white font-bold px-2 py-1">Recomendado</span>
    </div>
  }
  <div className="self-stretch  flex-col justify-start items-center gap-8 flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <Diamond weight="fill" size={32} className={color}/>
      <div className={`${color} text-center text-2xl font-bold`}>Plano Silver</div>
    </div>
    <div className="self-stretch  flex-col justify-center items-start gap-4 flex">
      <div className="justify-center items-center gap-1 inline-flex">
        <div className="text-white text-sm font-normal">R$</div>
        <div className="text-white text-3xl font-bold">29,99</div>
        <div className="text-zinc-500 text-sm font-normal">/mês</div>
      </div>
      <div className="text-white text-base font-normal">Perfeito para iniciantes</div>
    </div>
  </div>
  <div className="self-stretch  flex-col justify-start items-start gap-8 flex">
    <button className="hover:bg-violet-700 transition-colors text-white text-base font-bold self-stretch p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
      Assinar agora
    </button>
    <div className="self-stretch  pt-4 border-t border-zinc-700 flex-col justify-start items-start gap-3.5 flex">
      {
        features.map((features) => {
            return <Feature text={features}/>
        })
      }
    </div>
  </div>
</div>
    )
}