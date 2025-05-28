import SocialMedia from "./socialmidia"

export default function Footer() {
    return (
        <>
        <footer className="    bg-blue-600 w-full flex justify-center  border-t-2 border-t-white border-b-2 "> 

            <div className="grid justify-center  md:flex md:justify-start relative p-4 gap-6 "> {/* div pai*/}

                <div className="w-[100px] m-4 me-8"> {/* div da logo*/}
                    <img src="/imgs/imgsteste/ch1.jpg" alt="" />
                </div>

                <div className="m-auto "> {/* div das informações, tipo a história e localização*/}
                    <h2 className="capitalize font-bold">Colégio Instituto Dom Pedro II</h2>
                    <p>Localização- rua sei lá aonde blablabla</p>
                    <p className="border-b-1">Horário de atendimento - 7 horas às 17 horas</p>
                    <h4 className="font-bold">MAIS</h4>
                    <p>Nossa História</p>
                    <p>Gestão</p>
                    <p>Missão, visão e valores</p>
                    
                </div>

                <div className=""> {/* div dos conteúdos*/}
                    <h2 className="capitalize font-bold">Conteúdos sla</h2> <br />
                    <p>Educação</p>
                    <p>Eventos Escolares</p>
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
                    <p>Email: tralala@gmail.com</p>
                    <p>Telefone: 8922-4002</p>
                    <p>WhatsApp: (11) 98754-2345</p> 
                </div>

                <div>
                    <h2 className="font-bold">Informações Extras</h2> <br />
                    <p>Avisos Importantes</p>
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