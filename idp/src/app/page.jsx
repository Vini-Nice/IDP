import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";
import CardNoticies from "./components/cardsNoticies/cardsNoticies";

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


export default function Home() {
  const images = [
    "/imgs/imgsteste/futsal.jpeg",
    "/imgs/imgsteste/junina.png",
    "/imgs/imgsteste/exame.jpg",
    "/imgs/imgsteste/reuniao.png",
  ];

  

  return (
    <>
      {/* ----------------------- CARROSSEL --------------------------------------------*/}
      
      <div className="h-full min-h-48 flex flex-col items-center justify-center p-2 bg-gray-100">
        <h2 className={`${merriweather.className} text-black italic font-bold`}>Principais notícias</h2>
        <Carousel images={images} />
      </div>

      <br className="bg-gray-100" />

      <div className="flex w-full  items-center justify-center-safe p-3 bg-gray-100 text-black">

        <div className="grid md:grid-cols-2 xl:flex  text-center gap-4 xl:justify-center">
          {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}
          <div className="grid justify-center w-100">
            <div>
              <h2 className={`${merriweather.className}`}>Título noticia</h2>
            </div>
            <div className="w-100 ">
              <img
                src={"/imgs/imgsteste/auditorio.jpg"}
                alt={"Foto noticia"}
                className=" object-cover shadow-black shadow-md"
                quality={100}
                layout="responsive"
                width={500}
                height={200}
              />
            </div>
            <div className={`${roboto.className}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              quis minus soluta tempore ab eligendi molestiae, excepturi, eius
              alias ipsa voluptatibus natus voluptate quibusdam possimus
              reprehenderit. Assumenda, totam. Sit, laboriosam?
            </div>
          </div>

          {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}


          <div className="grid justify-center w-100">
            <div>
              <h2 className={`${merriweather.className}`}>Título noticia</h2>
            </div>
            <div className="w-100"> 
              <img
                src={"/imgs/imgsteste/biblioteca.jpg"}
                alt={"Foto noticia"}
                className="object-cover shadow-black shadow-md"
                quality={100}
                layout="responsive"
                width={500}
                height={200}
              />
            </div>
            <div className={`${roboto.className}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              quis minus soluta tempore ab eligendi molestiae, excepturi, eius
              alias ipsa voluptatibus natus voluptate quibusdam possimus
              reprehenderit. Assumenda, totam. Sit, laboriosam?
            </div>
          </div>
          {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}
          <div className="grid justify-center w-100">
            <div>
              <h2 className={`${merriweather.className}`}>Título noticia</h2>
            </div>
            <div className="w-100">
              <img
                src={"/imgs/imgsteste/futsal.jpeg"}
                alt={"Foto noticia"}
                className="h-[280px] object-cover shadow-black shadow-md"
                quality={100}
                layout="responsive"
                width={500}
                
              />
            </div>
            <div className={`${roboto.className}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              quis minus soluta tempore ab eligendi molestiae, excepturi, eius
              alias ipsa voluptatibus natus voluptate quibusdam possimus
              reprehenderit. Assumenda, totam. Sit, laboriosam?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
