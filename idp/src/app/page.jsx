import Image from "next/image";
import Carousel from "./components/Carousel/Carousel";

export default function Home() {

  const images = [
    "/imgs/imgsteste/ch1.jpg",
    "/imgs/imgsteste/ch1.jpg",
    "/imgs/imgsteste/ch1.jpg",
    "/imgs/imgsteste/ch1.jpg"
  ];

  return (
    <>

    {/* ----------------------- CARROSSEL --------------------------------------------*/}
    <div className="h-full min-h-48 flex items-center justify-center bg-gray-100">
      <Carousel images={images} />
    </div>


    {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}
    <div className="">
      <div>
        <h2>Título noticia</h2>
      </div>
      <div>
        <Image 
        src={"/imgs/imgsteste/ch1.jpg"}
        alt={"Foto noticia"}
        className="object-cover shadow-black shadow-md"
        quality={100}
        layout="responsive"
        width={200}
        height={300}
        />
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa voluptatibus natus voluptate quibusdam possimus reprehenderit. Assumenda, totam. Sit, laboriosam?</div>
    </div>

    {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}
    <div>
      <div>
        <h2>Título noticia</h2>
      </div>
      <div>
        <Image 
        src={"/imgs/imgsteste/ch1.jpg"}
        alt={"Foto noticia"}
        className="object-cover shadow-black shadow-md"
        quality={100}
        layout="responsive"
        width={200}
        height={300}
        />
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa voluptatibus natus voluptate quibusdam possimus reprehenderit. Assumenda, totam. Sit, laboriosam?</div>
    </div>

      {/* ----------------------- SEÇÃO PARA CARDS COM ALGUMAS NOTÍCIAS --------------------------------------------*/}
    <div>
      <div>
        <h2>Título noticia</h2>
      </div>
      <div>
        <Image 
        src={"/imgs/imgsteste/ch1.jpg"}
        alt={"Foto noticia"}
        className="object-cover shadow-black shadow-md"
        quality={100}
        layout="responsive"
        width={200}
        height={300}
        />
      </div>
      <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quis minus soluta tempore ab eligendi molestiae, excepturi, eius alias ipsa voluptatibus natus voluptate quibusdam possimus reprehenderit. Assumenda, totam. Sit, laboriosam?</div>
    </div>


    </>
  );
}
