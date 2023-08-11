import classNames from "classnames"

interface TopicsProps {
    text: string
}

export const Topics = ({text}: TopicsProps) => {
    return (
    <div className={classNames({
        "flex-col": true,
        "flex": true,
        "justify-start": true,
        "items-start": true,
        "gap-4": true
    })}>
      <button className={classNames({
        "px-5": true,
        "py-4": true,
        "rounded-xl": true,
        " justify-center": true,
        "items-center": true,
        "gap-4": true,
        "inline-flex": true,
        "hover:bg-slate-200": true,
        "transition": true,
        "ease-in-out": true,
        "delay-107": true
      })}>
        <span className={classNames({
            "text-slate-500": true,
            "text-2xl": true,
            "font-bold": true,
        })}>{text}</span>
      </button>
    </div>
    )
}