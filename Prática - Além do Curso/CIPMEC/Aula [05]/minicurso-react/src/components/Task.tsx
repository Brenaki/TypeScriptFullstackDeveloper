import { Check, Trash } from "phosphor-react";

export default function Task(){
    return(
        <div className="
        mt-6
        flex
        justify-between
        items-start
        p-4
        bg-zinc-800
        rounded-lg
        border
        border-zinc-700
        ">
            <div className="
            flex
            text-sm
            ">
                <label className="
                flex
                items-center
                cursor-pointer
                ">
                    <Check className="
                    bg-violet-600
                    border-2
                    border-violet-600
                    rounded-[50%]
                    p-[0.1rem]
                    "/>
                    <input
                    className="
                    opacity-0
                    "
                    type="checkbox"/>
                    <p className="
                    text-zinc-300
                    select-none
                    ">
                        Estudar para a prova de Físca I
                    </p>
                </label>
            </div>
            <button
            className="
            border-none
            outline-none
            bg-transparent
            text-zinc-300
            ">
                <Trash />
            </button>
        </div>
    )
}