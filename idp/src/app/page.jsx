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

      <div className="flex w-full items-center justify-center p-3 bg-gray-100 text-black">
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-6xl">
    {/* ----------------------- CARD 1 --------------------------------------------*/}
    <div className="flex flex-col items-center p-4 hover:scale-115 transition-transform duration-300 ease-in-out">
      <h2 className={`${merriweather.className} text-lg font-bold mb-2`}>
        Título notícia
      </h2>
      <div className="w-full aspect-video overflow-hidden rounded-sm border">
        <img
          src={"/imgs/imgsteste/auditorio.jpg"}
          alt={"Foto noticia"}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${roboto.className} text-sm mt-4 text-justify`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis
        minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa
        voluptatibus natus voluptate quibusdam possimus reprehenderit.
        Assumenda, totam. Sit, laboriosam?
      </p>
    </div>

    {/* ----------------------- CARD 2 --------------------------------------------*/}
    <div className="flex flex-col items-center p-4 hover:scale-115 transition-transform duration-300 ease-in-out">
      <h2 className={`${merriweather.className} text-lg font-bold mb-2`}>
        Título notícia
      </h2>
      <div className="w-full aspect-video overflow-hidden rounded-sm border">
        <img
          src={"/imgs/imgsteste/biblioteca.jpg"}
          alt={"Foto noticia"}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${roboto.className} text-sm mt-4 text-justify`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis
        minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa
        voluptatibus natus voluptate quibusdam possimus reprehenderit.
        Assumenda, totam. Sit, laboriosam?
      </p>
    </div>

    {/* ----------------------- CARD 3 --------------------------------------------*/}
    <div className="flex flex-col items-center p-4 hover:scale-115 transition-transform duration-300 ease-in-out">
      <h2 className={`${merriweather.className} text-lg font-bold mb-2`}>
        Título notícia
      </h2>
      <div className="w-full aspect-video overflow-hidden rounded-sm border">
        <img
          src={"/imgs/imgsteste/futsal.jpeg"}
          alt={"Foto noticia"}
          className="w-full h-full object-cover"
        />
      </div>
      <p className={`${roboto.className} text-sm mt-4 text-justify`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis
        minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa
        voluptatibus natus voluptate quibusdam possimus reprehenderit.
        Assumenda, totam. Sit, laboriosam?
      </p>
    </div>
  </div>
</div>


    </>
  );
}
