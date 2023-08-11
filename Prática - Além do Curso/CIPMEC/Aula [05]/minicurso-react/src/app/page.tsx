"use client"
import Clipboard from "@/components/Clipboard";
import Header from "@/components/Header";
import { PlusCircle } from "phosphor-react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="
      max-w-[46rem]
      my-auto
      mx-auto
      px-4
      flex
      flex-col
      justify-center
      ">
        <form className="
        -mt-[2rem]
        flex
        justify-between
        mb-16
        gap-2
        ">
          <input 
          placeholder="Adicione uma nova tarefa"
          className="
          transition-colors
          duration-200
          outline-none
          w-full
          bg-zinc-800
          text-white
          p-4
          border-2
          border-zinc-700
          focus:border-violet-600
          rounded-lg
          "/>
          <button className="
          p-4
          text-zinc-300
          bg-blue-600
          rounded-lg
          text-lg
          flex
          justify-center
          items-center
          gap-1
          transition-colors
          duration-200
          hover:bg-blue-700
          ">
            Criar
            <PlusCircle size={20}/>
            </button>
        </form>
        <Clipboard />
      </div>
    </div>
  )
}
