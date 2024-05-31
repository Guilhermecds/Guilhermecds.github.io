import Link from 'next/link';
import Foto from './Foto';

export default function Navbar() {
  return (
    <nav className="bg-gray-950 fixed top-0 left-0 w-80 flex flex-col items-center py-5 justify-center" style={{ minHeight: '100vh' }}>
      <div className="">
        <Foto />
      </div>
      <div className="mt-10">
        <Link href="#">
          <p className="text-lg font-bold text-gradient">Baixar Curriculo</p>
        </Link>
      </div>
    </nav>
  );
}
