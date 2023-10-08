import ImgRetangulo01 from '../app/assets/Rectangle 72.png'
import ImgRetangulo02 from '../app/assets/Rectangle 73.png'
import ImgRetangulo03 from '../app/assets/Rectangle 74.png'



const Informations01 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-orange-50 text-black-900 bg-info-texture bg-cover border-black-900 border-[1px] bg-no-repeat">
      <span className="text-3xl pt-10 font-sans text-[40px]">Quem somos</span>
        <div className='underline-custom w-[8em]' />
      {/* DIVISÃO DE LAYOUT */}
        <div className="grid grid-cols-2 mt-16 mx-10 font-Thasadith font-semibold max-md:grid max-md:grid-cols-1 max-sm:grid max-sm:grid-cols-1">

          {/* esquerdo */}
          <div className="flex flex-col items-center lg:items-start justify-center lg:p-0 mx-10">

          <span className="pb-5 text-[40px] font-bold -mb-4">What is Lorem Ipsum?</span>
          <div className='underline-custom w-[283px] mb-6 ' />

          <div className="text-lg max-w-xl text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in
          </div>

          <button className='w-[195px] h-[45px] bg-orange-850 text-black-50 font-Thasadith text-xl shadow-inner shadow-black-400 mt-12 hover:bg-orange-150 transition-colors'>Saber mais -&gt; </button>
          </div>



          {/* direito */}
          <div className="relative flex  items-center container max-sm:-mb-[30em] max-md:-mb-[30em]">

            <div className="w-[730px] h-[535px] relative px-10 mb-24 ">
              <img className="lg:w-[600px] lg:h-[322px]    md:w-[430px] md:h-[292px]    max-sm:w-0 sm:h-0  left-0 absolute shadow border-2 border-black" src={ImgRetangulo01.src} />
              <img className="lg:w-[300px] lg:h-[213px]    md:w-0 md:h-0                max-sm:w-0 sm:h-0  top-[322px]  left-[300px] absolute shadow border-2 border-black" src={ImgRetangulo02.src} />
              <img className="lg:w-[300px] lg:h-[213px]    md:w-[430px] md:h-[292px]    max-sm:w-0 sm:h-0  left-0 top-[322px] absolute shadow border-2 border-black" src={ImgRetangulo03.src} />
            </div>

          </div>
        </div>
      

    </div>
  )
}

export default Informations01;
