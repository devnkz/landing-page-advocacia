import { Roboto } from "next/font/google"

const FontRoboto = Roboto({
    weight: ['400'],
    subsets: ['latin'],
})

// OS parametros button_color e button_border devem ser preenchidos com estilizacoes TailwindCSS

export function Button({ textButton, button_border, button_color }) {
    return (
        <button className={`${FontRoboto.className}
        p-4 ${button_color} ${button_border} text-white font-bold text-center rounded-xl hover:scale-110 transition duration-50 btnAction`}>
            {textButton}
        </button>
    )
}