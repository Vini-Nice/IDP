import SocialMedia from "./socialmidia"

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
                    <p>Localização- Av. 203, Unid 203, Rua 13, 57, São Luís - MA, 65058-009</p>
                    <p className="border-b-1">Horário de atendimento - 7 horas às 17 horas</p>
                    <h4 className="font-bold">MAIS</h4>
                    <p>Nossa História</p>
                    <p>Gestão</p>
                    <p>Missão, visão e valores</p>
                    
                </div>

                <div className=""> {/* div dos conteúdos*/}
                    <h2 className="capitalize font-bold">Conteúdos sla</h2> <br />
                    <p>Educação</p>
                    <p> <a href="../eventos">Eventos Escolares</a></p>
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
                    <p className="hover:underline hover:cursor-pointer">Email:  contato@institutodompedroii.edu.br</p>
                    <p className="hover:underline hover:cursor-pointer">Telefone: 8922-4002</p>
                    <p className="hover:underline hover:cursor-pointer">WhatsApp: (11) 98754-2345</p> 
                </div>

                <div>
                    <h2 className="font-bold">Informações Extras</h2> <br />
                    <p> <a href="../avisos">Avisos Importantes</a></p>
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