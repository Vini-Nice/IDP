export default function Header() {
    return (
        <>
            <nav className="bg-blue-600 border-t-2 border-b-2">
                <div className="flex justify-between items-center py-5 px-7">
                    
                    <div>
                        <h2>IDP NEWS</h2>
                    </div>
                    
                    <div>
                        <ul className="flex gap-8">
                            <li><a href="">Notícias</a></li>
                            <li><a href="../avisos">Avisos</a></li>
                            <li><a href="">Eventos</a></li>
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