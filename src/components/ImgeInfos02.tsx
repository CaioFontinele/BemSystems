import Img02 from '../app/assets/Rectangle 86.jpg'

const ImgeInfos02 = () => {
  return (
    <div className='flex justify-center mt-[13em] '>
        <div className='grid grid-cols-2 gap-66 -mt-[6em] '>
            <div className='pl-[15em] flex flex-col items-start justify-center text-black-900'>
                <span className='font-Thasadith text-[32px]'>Conheça nossos espaços</span>
                <div className='underline-custom w-[14em] ' />

                <p className='mt-8 font-sans text-[24px]'>Venha vivenciar a melhor experiência de conforto conosco.</p>
                <p className='font-sans text-[24px] leading-4'>Estamos te aguardando !</p>

                <button className='w-[195px] h-[45px] bg-orange-850 text-black-50 font-Thasadith text-xl shadow-inner shadow-black-400 mt-12 hover:bg-orange-150 transition-colors'>Saber mais -&gt; </button>

            </div>

            <div className=''>
                <img src={Img02.src} alt="Demonstrativo 01" className='max-w-5xl'/>
            </div>
        </div>

        </div>
  )
}

export default ImgeInfos02