import { Roboto, Merriweather, Playfair_Display } from 'next/font/google';

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
            <nav className={`${merriweather.className}  bg-blue-600 border-t-2 border-b-2`}>
                <div className="flex md:flex md:items-center md:justify-between md:py-5 md:px-7 justify-between items-center py-5 px-7">
                    
                    <div>
                        <h2>IDP NEWS</h2>
                    </div>
                    
                    <div>
                        <ul className="flex gap-8">
                            <li><a href="">Notícias</a></li>
                            <li><a href="../avisos">Avisos</a></li>
                            <li><a href="../eventos">Eventos</a></li>
                        </ul>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <ul className="flex gap-4">



                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="./login" className="text-neutral-950">Sign In</a></button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="" className="text-neutral-950">Sign Up</a> </button>
                    </ul>
                </div>
            </nav>
            
        </>
    );
}