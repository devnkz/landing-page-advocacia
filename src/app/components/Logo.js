import { Raleway } from "next/font/google"
import Image from "next/image"

const FontRaleway200 = Raleway({
    weight: ['200'],
    subsets: ['latin'],
})

export function Logo({ width }) {
    return (
        <div className={`${ width }flex items-center justify-center gap-3`}>
            <div className="relative h-24 w-24 sm:h-36 sm:w-36">
                <Image
                    src="/Logo.png"
                    alt="Logo da Empresa Matos Lima"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className="bg-gray-500 h-24 sm:h-36 w-0.5 rounded-md"></div>
            <div className={`text-center ${FontRaleway200.className}`}>
                <h1 className=" text-xl sm:text-4xl">Ricardo Matos</h1>
                <hr></hr>
                <p className="text-yellow-300 text-center text-lg">Advocacia</p>
            </div>
        </div>
    )
}