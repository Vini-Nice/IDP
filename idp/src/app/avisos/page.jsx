"use client"
import Header from "../components/Header/Header"
import { usePathname } from 'next/navigation';


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
export default function Avisos() {



  return (
    <>

      <div>
        <h1 className={`${merriweather.className} text-4xl font-bold`}>Título Merriweather</h1>
        <p className={`${roboto.className} text-4xl font-bold`}>Texto Roboto</p>
        <p className={`${playfairDisplay.className} text-4xl font-bold`}>Destaque Playfair Display</p>

      </div>

    </>
  )
}