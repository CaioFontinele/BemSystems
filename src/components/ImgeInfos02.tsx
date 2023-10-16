import Img02 from '../app/assets/Rectangle 86.jpg'

const ImgeInfos02 = () => {
  return (
    /* DIV PAI */ 
    <div className='flex justify-center mt-[10em] '> 

        {/*Colunas*/}
        <div className='
            grid grid-cols-2 -mt-[6em] gap-0
            
            max-lg:flex max-lg:flex-wrap-reverse max-lg:gap-5 max-lg:items-center max-lg:max-w-3xl

        '>

            {/* Direita */}
            <div className='flex flex-wrap flex-col items-start justify-center text-black-900 ml-10  max-lg:flex-auto max-lg:items-center max-lg:justify-center max-lg:text-center'>

                <span className='font-Thasadith text-3xl'>Conheça nossos espaços</span>
                <div className='underline-custom w-[14em] ' />

                <p className='mt-8 font-sans text-xl'>Venha vivenciar a melhor experiência de conforto conosco. <br/> Estamos te aguardando !</p>
                

                <button className='w-[195px] h-[45px] bg-orange-850 text-black-50 font-Thasadith text-xl shadow-inner shadow-black-400 mt-4 hover:bg-orange-150 transition-colors'>Saber mais -&gt; </button>

            </div>


            {/* Esquerda | Imagem */}
            <div>
                <img src={Img02.src} alt="Demonstrativo 01" 
                    className='
                    max-w-[40rem] h-auto

                    max-lg:max-w-3xl max-lg:h-auto 
    
                    max-sm:max-w-full max-sm:h-auto 
                '/>
            </div>


        </div>
    </div>
  )
}

export default ImgeInfos02