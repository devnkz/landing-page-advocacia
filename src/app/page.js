'use client'

//fontes e Component de imagem do next
import Image from "next/image";
import { Raleway, Cormorant_Garamond, Roboto } from "next/font/google";

//components
import CheckBoxContainer from "./components/Checkbox/index";
import CardCasos from "./components/CardCasos/index";
import { Button } from "./components/button";
import { Title_Subtitle } from "./components/Title_Subtitle";
import { Logo } from "./components/Logo";
import { Footer } from "./components/footer";
import { Animation } from "./components/divAnimada";

//Funcao para escrever codigo javascript somente do lado do client
import { useEffect } from "react";

//Icones
import { ArrowUp, Menu, X } from "react-feather";
import { Form } from "./components/form";

// Fontes usadas no site
const FontRaleway400 = Raleway({
  weight: ['400'],
  subsets: ['latin'],
})
const FontGaramond = Cormorant_Garamond({
  weight: ['500'],
  subsets: ['latin'],
})
const FontRoboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  // codigo para animacoes de scroll  
  // Os items aparecem conforme rolar pra baixo
  useEffect(() => {
    const classHidden = document.querySelectorAll('.Itemhidden');
    const myObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('Itemshow');
        }
      })
    })
    classHidden.forEach((elements) => myObserver.observe(elements))

    //Funcao para aparecer o btn de voltar
    const btnReturn = document.querySelector('.btn-voltar');

    window.addEventListener('scroll', () => {
      const ScrollPosition = window.scrollY;
      console.log(ScrollPosition)
      if (ScrollPosition > 300) {
        btnReturn.classList.add('Aparecer')
      }
      else {
        btnReturn.classList.remove('Aparecer');
      }
    })

    //Botao para voltar ao topo da pagina
    btnReturn.addEventListener('click', () => {
      if (window.scrollY > 0) {
        scrollTo(0, 0)
      }
    })

    //Funcao para trocar o bg do header mobile

    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
      if( window.scrollY > 0){
        header.style.backgroundColor = 'black';
      } else{
        header.style.backgroundColor = 'transparent';
      }
    });

    //Funcao dos botoes Saiba mais e Agender/Entrar em contato
    const btnActions = document.querySelectorAll('.btnAction');
    btnActions.forEach((btnAction) => {
      btnAction.addEventListener('click', () => {
        const textoDoBotao = btnAction.textContent;

        if (textoDoBotao === 'Agendar agora' || textoDoBotao === 'Entrar em contato' || textoDoBotao === 'Enviar') {
          window.location.href = '#contatos';
        } else {
          window.location.href = '#saiba-mais';
        }
      });
    });

    // Funcao para enviar os dados do formulario ao meu numero de telefone
    document.getElementById('meu-formulario').addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectElement = document.getElementById('opcoes');
      const selectedValue = selectElement.value;
      const nome = document.querySelector('.nome').value
      const email = document.querySelector('.email').value
      const telefone = document.querySelector('.telefone').value
      const detalhes = document.querySelector('.detalhes').value

      if (selectedValue === '0') {
        return alert('Você não selecionou uma opção')
      };

      const mensagem = `Olá senhor(a) ${nome}\n\nEmail: ${email}\nTelefone: ${telefone},\n\nAcusação: ${selectedValue}\nDetalhes de sua acusação: ${detalhes}.\n\nEstamos analisando seu caso, O retorno chegará em breve...`
      const url = `https://api.whatsapp.com/send?phone=11974011996&text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });

    //Funcao para enviar mensagem ao secretario

    document.getElementById('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const mensagemUser = document.getElementById('mensage').value;

      const url = `https://api.whatsapp.com/send?phone=11974011996&text=${encodeURIComponent(mensagemUser)}`;
      window.open(url, '_blank');
    });

    //Funcao para abrir e fechar o menu mobile

    const OpenMenuMobile = document.querySelector('.OpenMenuMobile');
    const CloseMenuMobile = document.querySelector('.CloseMenuMobile');
    const menuMobile = document.querySelector('.menuMobile');
    const menuLinks = document.querySelectorAll('.menuMobile a');

    OpenMenuMobile.addEventListener('click', () => {
      menuMobile.style.width = '100%';
    });

    CloseMenuMobile.addEventListener('click', () => {
      menuMobile.style.width = '0%';
    });

    menuLinks.forEach(link =>{
      link.addEventListener('click', () =>{
        menuMobile.style.width = '0%';
      });
    })

  });

  return (
    <>
      <main className="w-full flex flex-col items-center">
        {/* Botao de voltar ao topo */}
        <button className="hidden lg:flex fixed z-10 bottom-5 right-5 bg-yellow-400 p-2 rounded-xl btn-voltar Sumir">
          <ArrowUp size={30} color="black" />
        </button>

        {/* menu mobile */}

        <div className={`${FontRaleway400.className} lg:hidden z-50 fixed left-0 top-0 transition-all duration-500 bg-zinc-800 h-full w-0 overflow-hidden menuMobile`}>
          <div className="flex flex-col p-12 h-screen justify-around items-end">
            <button className="CloseMenuMobile">
              <X className="h-24 w-24"/>
            </button>
            <a className="text-4xl sm:text-6xl" href="#home">Home</a>
            <a className="text-4xl sm:text-6xl" href="#casos">Casos</a>
            <a className="text-4xl sm:text-6xl" href="#saiba-mais">Saiba mais</a>
            <a className="text-4xl sm:text-6xl" href="#contatos">Contato</a>
          </div>
        </div>


        {/* Sessao home */}
        <div id="home" className="w-full flex justify-center p-4 border-b-2 items-end border-yellow-400 h-[650px] sm:h-[710px] md:h-[650px] lg:h-auto">
          <section className="w-full max-w-[1200px] flex flex-col justify-center items-center p-4">
            {/* Header da home */}
            <header className="fixed lg:relative top-0 left-0 z-40 flex justify-around items-center p-8 w-full gap-3 header">
              <Logo width={''} />
              <nav className={`${FontRaleway400.className} hidden lg:flex lg:justify-center lg:items-center`}>
                <ul className="flex gap-4">
                  <li><a className="hover:text-yellow-400" href="#home">Home</a></li>
                  <li><a className="hover:text-yellow-400" href="#saiba-mais">Saiba mais</a></li>
                  <li><a className="hover:text-yellow-400" href="#casos">Casos</a></li>
                  <li><a className="hover:text-yellow-400" href="#contatos">Contato</a></li>
                </ul>
              </nav>
              <button className="lg:hidden OpenMenuMobile">
                <Menu size={36} />
              </button>
            </header>
            {/*Texto principal e imagem ilustrativa home*/}
            <div className="w-4/5 flex flex-col gap-4 justify-center items-start">
              <h1 className={`${FontGaramond.className} text-3xl sm:text-5xl`}>Advogado Criminal</h1>
              <div className="flex flex-col gap-4 items-start">
                <h2 className={`${FontRoboto.className} text-xl sm:text-2xl text-center bg-white text-black rounded-sm p-2 sm:p-4 w-full`}>Precisa de ajuda ?</h2>
                <p className={`${FontRaleway400.className} text-md sm:text-xl`}>
                  Agende agora uma consultoria com o advogado especializado em Direito Criminal, Dr. Ricardo Matos.
                  Com ampla experiência em defesa criminal, ele oferece orientação jurídica especializada para resolver
                  seu caso com seriedade e compromisso.
                  Não adie, entre em contato e agende uma consulta para entender suas opções legais com segurança.
                </p>
              </div>
              <div className="flex gap-4">
                <Button textButton={'Agendar agora'} button_color={'bg-green-700'} button_border={'border-none'} />
                <Button textButton={'Saiba mais'} button_color={'bg-black'} button_border={'border-2'} />
              </div>
            </div>
          </section>
        </div>

        {/* Sessao saiba mais */}
        <section id="saiba-mais" className={`${FontRaleway400.className} bg-zinc-950 pt-12 pb-12 px-6 flex flex-col`}>
          {/* Titulos */}
          <Title_Subtitle Title={'Enfrenta alguns desses problemas'} Subtitle={'Dr. Ricardo Matos pode te ajudar!'} />
          {/* Topicos */}
          <div className="mt-12 flex flex-col items-start  gap-6">
            <CheckBoxContainer classe={'Itemhidden'} causa={"Homicídio: Defesa contra acusações de assassinato."} />
            <CheckBoxContainer classe={'Itemhidden'} causa={"Tráfico de Drogas: Defesa em casos de tráfico."} />
            <CheckBoxContainer classe={'Itemhidden'} causa={"Estelionato: Defesa contra fraudes financeiras."} />
            <CheckBoxContainer classe={'Itemhidden'} causa={"Crimes Contra a Honra: Defesa em casos de calúnia e difamação."} />
            <CheckBoxContainer classe={'Itemhidden'} causa={"Violência Doméstica e Crimes Sexuais: Defesa em casos de violência doméstica e crimes sexuais."} />
            <CheckBoxContainer classe={'Itemhidden'} causa={"Crimes Econômicos: Defesa em casos de lavagem de dinheiro e sonegação fiscal."} />
            <Button textButton={'Agendar agora'} button_color={'bg-green-700'} button_border={'border-none'} />
          </div>
        </section>

        {/* Sessao Sobre o advogado */}
        <section className={`${FontRaleway400.className} flex justify-center items-center w-full max-w-[1200px] gap-4 bg-zinc-950 pb-12`}>
          <div className="gap-8 flex justify-center items-center flex-col w-4/5 lg:w-2/4">

            <Title_Subtitle Title={'Quem é Ricardo Matos ?'} Subtitle={''} />
            <Animation Margem={'-mt-6'} />

            <p className=" text-base text-justify sm:text-md Itemhidden">
              Olá! Meu nome é Ricardo e sou advogado criminal. Tenho anos de experiência na defesa de clientes em casos complexos e delicados,
              sempre com o compromisso de proteger os direitos e a liberdade de cada indivíduo.
              Meu foco é proporcionar uma defesa justa e eficaz, abordando casos como homicídios, tráfico de drogas, estelionato, crimes contra a honra,
              crimes econômicos e violência doméstica.
              Entendo a importância de uma defesa bem construída e me dedico a garantir que cada cliente receba o apoio necessário em todas as etapas do processo.
              Se você está enfrentando acusações criminais ou precisa de orientação legal, estou aqui para ajudar.
              Vamos trabalhar juntos para construir a melhor estratégia de defesa e alcançar a justiça que você merece.
              Contate-me para uma consulta e vamos discutir como posso ajudar no seu caso. Estou à disposição para responder suas perguntas
              e fornecer o suporte que você precisa.
              Ricardo Seu defensor em momentos difíceis.
            </p>
          </div>
          <div className="relative w-[340px] h-[600px] hidden lg:flex Itemhidden">
            <Image src="/Advogado.png" alt="Foto do Advogado Ricardo Matos" fill style={{ objectFit: 'cover' }}
              className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
          </div>
        </section>

        {/* Sessao para atrair usuario a nos contatar */}
        <section id="casos" className="bg-zinc-800 w-full p-10 xl:p-20 border-y-2 border-yellow-400">
          <div className="max-w-[1200px] flex flex-col gap-8 items-start">
            <div className={`${FontRaleway400.className} Itemhidden`}>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl">Entre em contato agora mesmo <span className="text-yellow-400">!</span></h1>
              <strong className="text-3xl sm:text-5xl lg:text-7xl">Vamos te inocentar da melhor forma possivel<span className="text-yellow-400">.</span></strong>
            </div>
            <Button textButton={'Entrar em contato'} button_color={'bg-green-700'} button_border={''} />
          </div>
        </section>

        {/* Sessao Casos resolvidos */}
        <section id="casos" className="bg-zinc-950 w-full max-w-[1750px] flex justify-center">
          <div className="bg-zinc-950 p-8 flex flex-col justify-center items-center">
            <div className={`${FontRaleway400.className} gap-2 flex flex-col`}>
              <Title_Subtitle Title={'Casos Resolvidos'} Subtitle={'Alguns casos complicados que foram finalizados com sucesso e excelência!'} />
            </div>
            {/* Card dos casos ja resolvidos */}
            <div className="flex items-center justify-center gap-8 mt-16 Casos w-full flex-col xl:flex-row">
              <CardCasos classe={'Itemhidden'} urlImg={'/estelionato.png'} altImg={"Imagem indicativa de roubo"} NomedoCaso={"Estelionato"}
                relato={"Uma empresária foi acusada de estelionato por supostamente enganar investidores em um projeto imobiliário. Ricardo reuniu documentos e testemunhos para mostrar que houve uma má interpretação das ações da empresária e que ela agiu de boa fé. A empresária foi inocentada das acusações, e sua reputação foi restaurada."} />

              <CardCasos classe={'Itemhidden'} urlImg={'/ladrao.png'} altImg={"Imagem indicativa de roubo"} NomedoCaso={"Roubo"}
                relato={"Um cliente foi acusado de roubo após ser encontrado com itens supostamente roubados de uma loja. Ricardo investigou a origem dos itens e apresentou provas de que o cliente havia comprado os produtos de boa fé de um terceiro. O cliente foi absolvido das acusações, provando sua inocência."} />

              <CardCasos classe={'Itemhidden'} urlImg={'/homicidio.png'} altImg={"Imagem indicativa de roubo"} NomedoCaso={"Homicídio"}
                relato={"Um cliente foi acusado de homicídio após um incidente em uma briga de bar. Ricardo analisou as provas, conseguiu depoimentos de testemunhas e demonstrou que o cliente agiu em legítima defesa. O cliente foi absolvido das acusações, comprovando sua inocência."} />
            </div>
          </div>
        </section>

        {/* Sessao para contatos*/}
        <section id="contatos" className={`${FontRaleway400.className} bg-zinc-950 w-full max-w-[1750px] p-2 sm:p-12 flex justify-center items-center`}>
          <div className="flex flex-col lg:flex-row justify-evenly items-center Itemhidden">

            {/* Box de texto informativo do form */}

            <div className="p-4 w-full md:w-4/5 lg:w-2/4 2xl:w-1/3">
              <p className="text-yellow-400">ENTRE EM CONTATO</p>
              <Animation Margem={'-mt-0'} />
              <strong className="text-xl sm:text-4xl">Estamos Aqui Para Defender Seus Direitos!</strong>
              <p className="text-base text-justify mt-8">
                Se você está enfrentando acusações criminais, saiba que estamos prontos para lutar ao seu lado.
                Com uma abordagem dedicada e personalizada,
                garantimos uma defesa justa e eficaz para proteger sua liberdade e reputação.
                Entre em contato e conte com nossa experiência para enfrentar qualquer desafio legal.
              </p>
            </div>
            {/* Formulario */}
            <Form />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
