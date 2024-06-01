import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col items-center mb-10">
            <h1 className="text-6xl font-bold text-gradient nome-titulo">Guilherme C. Santos</h1>
            <p className="text-2xl text-gradient">Desenvolvedor de Software</p>
            <div>
                <p className="text-2xl text-gradient linha-contato-desktop text-center">guilherme.gazinlab@gmail.com |                 
                    <Link href="https://wa.me/5544984130281" className="hover:font-bold">
                        (44) 9 9172-8580
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-2xl text-gradient linha-contato-celular text-center">guilherme.gazinlab@gmail.com</p>   
                <p className="text-2xl text-gradient linha-contato-celular text-center">       
                    <Link href="https://wa.me/5544991728580" className="hover:font-bold">
                        (44) 9 9172-8580
                    </Link>
                </p>  
            </div>
            
        </header>
    );
}