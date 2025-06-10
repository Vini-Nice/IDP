import SocialMedia from "./socialmidia"
import Link from 'next/link'

export default function Footer() {
    return (
        <>
        <footer className="    bg-blue-600 w-full flex justify-center  border-t-2 border-t-white border-b-2 "> 

            <div className="grid sm:text-sm justify-center  md:grid-cols-4 md:text-sm  md:justify-start xl:flex relative p-4 gap-6 "> {/* div pai*/}

                <div className="w-[100px] m-4 me-8"> {/* div da logo*/}
                    <img src="/geral.imgs/logo2.png" alt="" />
                </div>

                <div className="m-auto "> {/* div das informações, tipo a história e localização*/}
                    <h2 className="capitalize font-bold">Colégio Instituto Dom Pedro II</h2>
                    <p><a href="https://www.google.com.br/maps/@-23.5778725,-46.6435895,3a,75y,339.85h,106.69t/data=!3m7!1e1!3m5!1sd8dVnMvHPpDf-deD5tcgXA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-16.686744241688572%26panoid%3Dd8dVnMvHPpDf-deD5tcgXA%26yaw%3D339.8529380678685!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDYwMy4wIKXMDSoASAFQAw%3D%3D">Localização- Rua Estela, 268, 04011-001
                    São Paulo - SP</a></p>
                    <p className="border-b-1">Horário de atendimento - 7 horas às 17 horas</p>
                    <h4 className="font-bold">MAIS</h4>
                    <p><Link href="/sobre" className="hover:text-gray-200 transition-colors">Nossa História</Link></p>
                    <p><Link href="/sobre" className="hover:text-gray-200 transition-colors">Gestão</Link></p>
                    <p><Link href="/sobre" className="hover:text-gray-200 transition-colors">Missão, visão e valores</Link></p>
                </div>

                <div className=""> {/* div dos conteúdos*/}
                    <h2 className="capitalize font-bold">Conteúdos</h2> <br />
                    <p>Educação</p>
                    <p><Link href="/eventos" className="hover:text-gray-200 transition-colors">Eventos Escolares</Link></p>
                    <p>Esportes e Cultura</p>
                    <p>Projetos e Iniciativas</p>
                    <p>Comunicados Oficiais</p>
                </div>

                <div>
                    <h2 className="capitalize font-bold ">Links Úteis</h2> <br />
                    <p>Calendário Escolar</p>
                    <p>Horário das Aulas</p>
                    <p>Parcerias</p>
                </div>

                <div>
                    <h2 className="font-bold">Contato</h2> <br />
                    <p className="hover:underline hover:cursor-pointer">Email: contato@institutodompedroii.edu.br</p>
                    <p className="hover:underline hover:cursor-pointer">Telefone: 8922-4002</p>
                    <p className="hover:underline hover:cursor-pointer">WhatsApp: (11) 98754-2345</p> 
                </div>

                <div>
                    <h2 className="font-bold">Informações Extras</h2> <br />
                    <p><Link href="/avisos" className="hover:text-gray-200 transition-colors">Avisos Importantes</Link></p>
                    <p>Biblioteca Online</p>
                    <p>Arquivos de Notícias</p>
                    <p>Galeria de Fotos e Vídeos</p>
                </div>

                <div>
                    <h2 className="font-bold">Nossas Redes</h2> <br />
                    <SocialMedia></SocialMedia>
                </div>

            </div>
        </footer>
        </>
    )
}