import { ArrowRight } from "phosphor-react"

interface TitleProps {
    text: string
}

export const Title = ({text}: TitleProps) => {
    return (
        <h1 className="text-white font-bold flex items-center gap-2 text-2xl">
        {text}<ArrowRight size={20}/> 
        </h1>
    )
}