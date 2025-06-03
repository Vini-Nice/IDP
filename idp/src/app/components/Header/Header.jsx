import { Roboto, Merriweather, Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
    return (
        <>
            <nav className={`${merriweather.className} bg-blue-600 border-t-2 border-b-2`}>
                <div className="flex md:flex md:items-center md:justify-between md:py-5 md:px-7 justify-between items-center py-5 px-7">
                    <div>
                        <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                            IDP NEWS
                        </Link>
                    </div>
                    
                    <div>
                        <ul className="flex gap-8">
                            <li>
                                <Link href="/noticias" className="text-white hover:text-gray-200 transition-colors">
                                    Noticias
                                </Link>
                            </li>
                            <li>
                                <Link href="/avisos" className="text-white hover:text-gray-200 transition-colors">
                                    Avisos
                                </Link>
                            </li>
                            <li>
                                <Link href="/eventos" className="text-white hover:text-gray-200 transition-colors">
                                    Eventos
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <ul className="flex gap-4">
                        <Link 
                            href="/Login"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-4 rounded transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link 
                            href="/Cadastro"
                            className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-4 rounded transition-colors"
                        >
                            Sign Up
                        </Link>
                    </ul>
                </div>
            </nav>
            
        </>
    );
}