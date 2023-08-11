import classNames from "classnames"
import { Diamond } from "phosphor-react"
import { Feature } from "./Feature"

interface PlanProps {
    text: string
    description: string
    value: number
    feature: string[]
    type: "silver" | "gold" | "diamond"
    best: boolean
}


export const Plan = ({text,description,value, type, best, feature}: PlanProps) => {

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
<div className={classNames({
  "justify-start items-center w-80 p-8": true,
   "bg-neutral-800 rounded-tl-[42px]": true,
    "rounded-tr-2xl rounded-bl-2xl": true,
    "rounded-br-[42px] border": true,
    "flex-col gap-8 inline-flex relative":true,
    "border-zinc-500": !best,
    "border-violet-600": best
})}>
  {
    best && <div className="absolute top-[-13px]">
      <span className={classNames({
        "bg-violet-600 rounded-md": true,
        "text-white font-bold px-2 py-1": true,
      })}>Recomendado</span>
    </div>
  }
  <div className="self-stretch flex-col justify-start items-center gap-8 flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <Diamond size={32} className={`${color} items-center`}/>
      <div className={`text-center text-2xl font-bold ${color}`}>{text}</div>
    </div>
    <div className="self-stretch flex-col justify-center items-start gap-4 flex">
      <div className="justify-center items-center gap-1 inline-flex">
        <div className="text-white text-sm font-normal">R$</div>
        <div className="text-white text-3xl font-bold">{value}</div>
        <div className="text-zinc-500 text-sm font-normal">/mês</div>
      </div>
      <div className="text-white text-base font-normal">{description}</div>
    </div>
  </div>
  <div className="self-stretch flex-col justify-start items-start gap-8 flex">
    <button className="hover:bg-violet-700 transition-colors text-white text-base font-bold self-stretch p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
      Assinar agora
    </button>
    <div className="self-stretch pt-4 border-t border-zinc-700 flex-col justify-start items-start gap-3.5 flex"></div>
      
      {
        feature.map((feature) => (
          <Feature text={feature}/>
        ))
      }

        </div>
    </div>
    )
}




