import { ArrowRight } from "phosphor-react"

interface TitleProps {
    text: string
}

export const Title = ({text}: TitleProps) => {
    return (
        <div className="flex flex-col after:w-12 after:bg-blue-600 after:h-0.5">
        <h1 className="text-white font-semibold flex items-center gap-2 text-2xl">
        {text}<ArrowRight size={28}/> 
        </h1>
        </div>
    )
}