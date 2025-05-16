import Image from "next/image";
import PropTypes, { string } from 'prop-types';



export default function CardNoticies() {
    const CardNoticies = ({
        imageSrc: string,
        imageAlt: string,
        title: string,
        content: string
    })
    return (
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
    )
}