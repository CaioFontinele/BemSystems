import Img01 from '../app/assets/Rectangle 63.jpg'


const ImgInfos = () => {
  return (
    <div className='flex justify-center mt-[10em]'>

        {/*Fontes */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Thasadith&display=swap"
        />

        
        {/*Imagens */}

        <div className='
          grid grid-cols-2 gap-8 
          max-lg:flex max-lg:flex-wrap max-lg:gap-5 max-lg:items-center max-lg:max-w-3xl
          
        '>
            <div>
                <img src={Img01.src} alt="Demonstrativo 01" 
                
                className='  
                max-w-[40rem] h-auto   
                max-lg:max-w-3xl max-lg:h-auto 
                max-sm:max-w-full max-sm:h-auto       
                '/>
            </div>



            {/*Palavras direita */}
            <div className='
              flex flex-col items-start justify-center text-black-900 lg:ml-20 
              max-lg:flex-auto max-lg:items-center max-lg:justify-center max-lg:text-center
            '>

               <span className='font-Thasadith text-3xl'>Conheça nossos espaços</span>
               <div className='underline-custom w-[14em] '></div>

               <p className='mt-8 font-sans text-xl'>Venha vivenciar a melhor experiência de conforto conosco.<br/> Estamos te aguardando !</p>
               

               <button className='w-[195px] h-[45px] bg-orange-850 text-black-50 font-Thasadith text-xl shadow-inner shadow-black-400 mt-4 hover:bg-orange-150 transition-colors'>Saber mais -&gt; </button>
            </div>
        </div>
    </div>
  )
}

export default ImgInfos