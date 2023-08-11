import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-zinc-950
        h-[200px]
        flex
        items-center
        justify-center
        py-[4.5rem]">
        <Image 
        src={"Logo.svg"}
        alt="Caneta com um degrâde de azul até roxo. Logo To-do List"
        width={263}
        height={48}
        />            
        </header>
    )
}