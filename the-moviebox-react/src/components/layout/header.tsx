export function Header() {
    return (
        <header className="py-4 px-8">
            <div className="max-w-6xl mx-auto flex flex-row items-center justify-between">
                <h1 className="text-2xl font-bold tracking-wide text-white">
                    <span className="font-normal">THE</span>MOVIEBOX
                </h1>
                <div className="flex gap-4">
                    <a 
                        className="
                            text-white text-sm py-2 px-4 border 
                            border-[#333] rounded transition 
                            hover:bg-[#333]" 
                        href="#">
                        Entrar
                    </a>
                    <a 
                        className="
                            text-white text-sm py-2 px-4 border 
                            border-[#e50914] rounded transition 
                            hover:bg-[#b8070f] bg-[#e50914]" 
                        href="#">
                        Registrar
                    </a>
                </div>
            </div>
        </header>
    )
}