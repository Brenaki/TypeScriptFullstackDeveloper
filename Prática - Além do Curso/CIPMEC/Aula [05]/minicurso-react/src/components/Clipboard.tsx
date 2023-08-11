import Task from "./Task";

export default function Clipboard(){
    return(
        <div>
            <header className="
            text-sm
            flex
            justify-between
            ">
                <div className="
                flex
                gap-2
                items-center
                ">
                    <strong className="
                    text-blue-600
                    ">Tarefas criadas</strong>
                    <span className="
                    bg-zinc-800
                    text-zinc-300
                    font-bold
                    rounded-xl
                    px-2
                    py-0.25
                    ">5</span>
                </div>
                <div className="
                flex
                gap-2
                items-center
                ">
                    <strong className="
                    text-violet-600
                    ">Tarefas concluídas</strong>
                    <span className="
                    bg-zinc-800
                    text-zinc-300
                    font-bold
                    rounded-xl
                    px-2
                    py-0.25
                    ">2 de 5</span>
                </div>
            </header>
            <div>
                <Task/>
            </div>
        </div>
    )
}