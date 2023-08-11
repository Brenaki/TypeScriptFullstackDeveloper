import { Desktop } from "phosphor-react"
import { Topics } from "./Topics"

interface LeftBarProps {
    feature: string[]
}

export const LeftBar = ({feature}: LeftBarProps) => {
    return (
    <div className="w-72 p-8 bg-white shadow flex-col justify-between items-start gap-32 inline-flex">
    <div className="flex-col justify-start items-start gap-14 flex">
    <div className="justify-center items-center gap-4 inline-flex">
      <Desktop size={40} className="bg-blue-600 px-2 py-2 text-white rounded-md"/>
      <div className="text-blue-600 text-3xl font-bold">CIPMEC2</div>
    </div>
    {
        feature.map((features) => {
            return <Topics text={features} />
        })
    }
  </div>
</div>
    )
}