import { Raleway } from "next/font/google"

const FontRaleway400 = Raleway({
    weight: ['400'],
    subsets: ['latin'],
})

// Quando quiser utilizar somente o title ou subtitle.
// Preencha apenas o campo que deseja e o outro vazio, dessa forma: <Title_Subtitle Title={'Quem é Ricardo Matos ?'} Subtitle={''}/>

export function Title_Subtitle({ Title, Subtitle }) {
    return (
        <div className={`${FontRaleway400.className} w-full flex flex-col items-center justify-center`}>
            <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl">{Title}</h1>
            <h2 className="text-base md:text-xl lg:text-3xl">{Subtitle}</h2>
        </div>
    )
}