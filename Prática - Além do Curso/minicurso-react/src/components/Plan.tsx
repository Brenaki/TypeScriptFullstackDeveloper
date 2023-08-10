import { ArrowRight, Check, Diamond } from "phosphor-react"

interface TitleProps {
    text: string
}

interface PlanProps {
    text: string
    description: string
    value: number
    type: string
    vetor: string[]
}


export const Plan = ({text,description,value, type, vetor}: PlanProps) => {
    return (
<div className="justify-center items-center w-80 p-8 bg-neutral-800 rounded-tl-[42px] rounded-tr-2xl rounded-bl-2xl rounded-br-[42px] border border-zinc-500 flex-col gap-8 inline-flex">
  <div className="self-stretch flex-col justify-start items-center gap-8 flex">
    <div className="self-stretch justify-start items-center gap-4 inline-flex">
      <Diamond size={20} className={`${type} items-center`}/>
      <div className={`text-center text-2xl font-bold ${type}`}>{text}</div>
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
    <button className="hover:bg-violet-700 duration-300 self-stretch p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
      <span className="text-white text-base font-bold">Assinar agora</span>
    </button>
    <div className="self-stretch pt-4 border-t border-zinc-800 flex-col justify-start items-start gap-3.5 flex"></div>
        
        <Text text={`${vetor[0]}`}/>
      
      </div>
    </div>
    )
}

interface TextProps {
    text: string
}

const Text = ({text}: TextProps) => {
return (
    <div className="justify-start items-start gap-2 inline-flex">
        <div className="w-4 relative" />
        <Check size={20} className="text-blue-600"/>
        <div className="text-white text-sm font-normal">{text}</div>
    </div>
     )
}


export const Title = ({text}: TitleProps) => {
    return (
    <div className="w-96 h-12 flex-col justify-start items-start gap-3 inline-flex">
    <div className="justify-center items-center gap-4 inline-flex hover:translate-x-3 duration-500">
    <button className="text-white text-3xl font-bold justify-center items-center gap-4 inline-flex">{text}</button>
    <ArrowRight size={30} className="text-white"/>
  </div>
  <div className="w-16 h-px border-2 border-blue-600"></div>
</div>
    )
}