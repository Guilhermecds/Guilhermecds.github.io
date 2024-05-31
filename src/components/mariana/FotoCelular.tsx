import Link from "next/link";

export default function FotoCelular() {
    return (
        <div className="flex flex-col items-center py-5 justify-center foto-curriculo">
            <img
                className="h-64 w-64 rounded-full"
                src="/marianacoelho.jpg"
                alt="Profile Picture"
            />
            <div className="mt-10">
                <Link href="#">
                    <p className="text-lg font-bold text-gradient">Baixar Curriculo</p>
                </Link>
            </div>
        </div>
    );
}