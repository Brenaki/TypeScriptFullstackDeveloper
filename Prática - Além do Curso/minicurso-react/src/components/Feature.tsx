import { Check } from "phosphor-react"

interface FeatureProps {
    text: string
}

export const Feature = ({text}: FeatureProps) => {
return (
    <div className="justify-start items-start gap-2 inline-flex">
        <div className="w-4 relative" />
        <Check size={20} className="text-blue-600"/>
        <div className="text-white text-sm font-normal">{text}</div>
    </div>
     )
}