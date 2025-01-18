import Image from "next/image"
import { Raleway } from "next/font/google"


const FontRaleway400 = Raleway({
    weight: ['400'],
    subsets: ['latin'],
})

export default function CardCasos({ NomedoCaso, relato, urlImg, altImg, classe }) {
    return (
        <div className={`flex w-full sm:w-11/12 2xl:w-1/4 flex-col p-4 sm:p-16 justify-between items-center bg-black rounded-md ${classe}`}>
            <div className="h-36 w-36 relative">
                <Image src={urlImg} alt={altImg} fill style={{objectFit: 'contain'}}/>
            </div>
            <div className={`${FontRaleway400.className} flex flex-col items-center justify-center`}>
                <h1 className="text-4xl">Caso: <span className="text-yellow-400">{NomedoCaso}</span></h1>
                <p className="mt-4 md:w-3/5 xl:w-full">{relato}</p>
            </div>
        </div>
    )
}