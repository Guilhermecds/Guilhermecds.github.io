import Link from "next/link";

export default function FotoCelular() {
    return (
        <>
            <img
                className="h-52 w-52 rounded-full"
                src="/marianacoelho.jpg"
                alt="Profile Picture"
            />
            <div className="mt-10">
                <Link href="#">
                    <p className="text-lg font-bold text-gradient">Baixar Curriculo</p>
                </Link>
            </div>
        </>
    );
}