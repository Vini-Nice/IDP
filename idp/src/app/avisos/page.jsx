"use client"
import Header from "../components/Header/Header"
import { usePathname } from 'next/navigation';

export default function Avisos(){

    

    return(
        <>
       
    <div>
      <h1 className="font-cabecalho text-4xl font-bold">Título Merriweather</h1>
      <p className="font-principal text-4xl font-bold">Texto Roboto</p>
      <p className="font-destaque text-4xl font-bold">Destaque Playfair Display</p>
    </div>

        </>
    )
}