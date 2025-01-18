export function Form() {
    return (
        <form className="p-4 w-full md:w-4/5 lg:w-2/4 2xl:w-1/3 flex flex-col gap-4" id="meu-formulario">
            {/* Div dos inputs*/}

            <div className="flex gap-4">
                <input type="text" className="input nome" placeholder="Nome" required />
                <input type="email" className="input email" placeholder="Email" required />
            </div>

            <div className="flex gap-4">
                <input className="input telefone" placeholder="Telefone" name="telefone" required />
                <select className="input" id="opcoes">
                    <option value="0" className="option">Qual seu caso ?</option>
                    <option value="Estelionato" className="option">Estelionato</option>
                    <option value="Homicídio" className="option">Homicídio</option>
                    <option value="Tráfico de drogas" className="option">Tráfico de drogas</option>
                    <option value="Crimes econômicos" className="option">Crimes econômicos</option>
                </select>
            </div>

            <textarea name="detalhes" className="input h-[120px] detalhes"
                placeholder="Escreva detalhamente o seu caso: " required />
            <button className="bg-zinc-600 w-full text-2xl p-2 round rounded-ss-xl rounded-ee-xl hover:bg-zinc-900 transition duration-110" type="submit">Enviar</button>
        </form>
    )
}