import { Logo } from "../Logo"
import { Instagram, Facebook, Linkedin } from "react-feather"
import { Raleway, Roboto } from "next/font/google"

const FontRaleway400 = Raleway({
    weight: ['400'],
    subsets: ['latin'],
})

const FontRoboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
})

export function Footer() {
    return (
        <footer className={`${FontRaleway400.className}bg-zinc-950 p-12 flex flex-col justify-center items-center border-t-2 border-yellow-400`}>
            <div className="w-full max-w-[1200px] flex items-center justify-center gap-8 flex-col lg:flex-row">
                <div className="sm:w-full flex flex-col justify-center items-center">
                    <Logo width={'flex flex-col'} />
                    <p className="2xl:max-w-[600px]">
                        Fale agora mesmo com um especialista, Dr. Ricardo Matos pode te ajudar, entre em contato e agende sua
                        consultoria para obter os melhores resultados.<span className="text-yellow-400 ml-3">
                        Envie uma mensagem ao nosso secretário e tire suas dúvidas !</span>
                    </p>
                    <p className="text-zinc-400">Direitos reservados © Empresa Fictícia</p>
                </div>
                <div className="w-full flex flex-col gap-2 items-center sm:w-full">
                    <strong className="text-2xl">Entre em contato</strong>
                    <h2>Telefone: <span className={FontRoboto.className}>11 97401-1996</span></h2>
                    <h2>Email: advocaciaRicardoMatos@gmail.com</h2>
                    <div className="w-full flex flex-col items-center">
                        <h1 className="text-xl">Nossas redes</h1>
                        <div className="flex gap-4 pt-2">
                            <div className="p-2 border-2 rounded-full opacity-25 hover:opacity-100 cursor-pointer">
                                <Instagram size={34} color="yellow" />
                            </div>
                            <div className="p-2 border-2 rounded-full opacity-25 hover:opacity-100 cursor-pointer">
                                <Facebook size={34} color="yellow" />
                            </div>
                            <div className="p-2 border-2 rounded-full opacity-25 hover:opacity-100 cursor-pointer">
                                <Linkedin size={34} color="yellow" />
                            </div>
                        </div>
                    </div>
                    <form id="form" className="flex border-2 border-yellow-400 rounded-xl">
                        <input id="mensage" className="bg-transparent border-none p-4 focus:outline-none" placeholder="Digite sua mensagem" />
                        <button className="p-2" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}