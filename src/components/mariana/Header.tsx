import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col items-center mb-10">
            <h1 className="text-6xl font-bold text-gradient nome-titulo">Mariana Coelho</h1>
            <p className="text-2xl text-gradient">Acadêmica de Psicologia</p>
            <p className="text-2xl text-gradient">coelho.mariananas@gmail.com |                 
                <Link href="https://wa.me/5544984130281" className="hover:font-bold">
                    (44) 98413-0281
                </Link></p>
            
        </header>
    );
}