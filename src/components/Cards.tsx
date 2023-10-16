import Img from '../app/assets/Quarto02.jpg';

const Cards = () => {
  return (
    <div>
        
        {/*Fontes */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200&display=swap"
        />

        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@800&display=swap"
        />

        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"
        />


      <div className="bg-orange-250 p-28 h-[386px] mt-8 ">
        <div className='-mt-20 text-3xl font-Thasadith text-black-900 flex items-center justify-center font-bold'>Destaques
            <span className='underline-custom w-20 mt-12 absolute'/>
        </div>
      </div>
     

      {/*Gap entre um card e outro */}
      <div className='flex items-center justify-center md:gap-[30px] lg:gap-[50px] mx-16 max-md:gap-10'>





    
        
        {/*Card 01 */}
        <div className=" card card-compact lg:w-[492px] lg:h-[600px] md:w-[400px] md:h-[600px] bg-black-55 -mt-[17em] max-w-sm shadow-2xl shadow-black-900">
            
            {/* Imagem do Card */}
            <figure className=''>
                <img src={Img.src} alt="Descrição da imagem" className='w-[493px] h-[359px] max-xl:h-[329px] hover:scale-125 duration-1000' />
            </figure>

            <div className="card-body">
                <h2 className="card-title justify-center font-sans font-bold text-2xl text-orange-950 text-[32px] ">Quarto Duplo Básico</h2>
                {/* Sublinhado */}
                <div className='underline-custom w-[13.5em] flex items-center justify-center mx-auto -mt-2'></div>
                <p className='text-justify leading-4 font-sans text-[20px] text-black-950  mt-4 font-extralight'>Desfrute de conforto e elegância em nosso quarto premium, perfeito para uma estadia relaxante. Quarto para 2 pessoas, não incluindo frigobar.</p>
            
                {/* Rodapé do card */}
                <div className='grid grid-cols-2 '>

                    {/* Lado esquerdo */}
                    <div>
                        <span className='italic font-sans3 text-[16px] text-orange-950 font-light'>A Partir De:</span>
                        <p className='text-[26px] text-orange-950 font-sans2 font-extrabold mt-2 max-xl:text-[25px] max-xl:mt-3'>R$ 129,90</p>
                    </div>

                    {/* Lado direito */}
                    <div className="card-actions justify-end">
                        <button className="text-black-50 shadow-inner shadow-black-400 w-[120px] h-[51px] md:mt-[21px] rounded-none bg-orange-850 font-sans text-[25px] font-extralight hover:bg-orange-150 transition-colors">Reservar</button>
                    </div>
                </div>

                
            </div>
        </div>



        {/*Card 02 */}
        <div className=" card card-compact max-md:hidden max-sm:hidden lg:w-[492px] lg:h-[600px] md:w-[400px] md:h-[600px]  bg-black-55 -mt-[17em] max-w-sm shadow-2xl shadow-black-900 ">
            
            {/* Imagem do Card */}
            <figure className=''>
                <img src={Img.src} alt="Descrição da imagem" className='w-[493px] h-[359px] max-xl:h-[329px] hover:scale-125 duration-1000' />
            </figure>
            <div className="card-body">             
                <h2 className="card-title justify-center font-sans font-bold text-2xl text-orange-950 text-[32px] ">Quarto Duplo Básico</h2>
                
                {/* Sublinhado */}
                <div className='underline-custom w-[13.5em] flex items-center justify-center mx-auto -mt-2'></div>
                    <p className='text-justify leading-4 font-sans text-[20px] text-black-950 mt-4 font-extralight'>Desfrute de conforto e elegância em nosso quarto premium, perfeito para uma estadia relaxante. Quarto para 2 pessoas, não incluindo frigobar.</p>
                

                {/* Rodapé do card */}
                <div className='grid grid-cols-2'>

                    {/* Lado esquerdo */}
                    <div>
                        <span className='italic font-sans3 text-[16px] text-orange-950 font-light'>A Partir De:</span>
                            <p className='text-[26px] text-orange-950 font-sans2 font-extrabold mt-2 max-xl:text-[25px] max-xl:mt-3'>R$ 129,90</p>
                    </div>

                    {/* Lado direito */}
                    <div className="card-actions justify-end">
                        <button className="text-black-50 shadow-inner shadow-black-400 w-[120px] h-[51px] md:mt-[21px] rounded-none bg-orange-850 font-sans text-[25px] font-extralight hover:bg-orange-150 transition-colors">Reservar</button>
                    </div>
                </div>

                
            </div>
        </div>







        {/*Card 03 */}
        <div className=" card card-compact max-lg:hidden lg:w-[492px] lg:h-[600px] bg-black-55 -mt-[17em] max-w-sm shadow-2xl shadow-black-900 ">
            
            {/* Imagem do Card */}
            <figure className=''>
                <img src={Img.src} alt="Descrição da imagem" className='w-[493px] h-[359px] max-xl:h-[329px] hover:scale-125 duration-1000' />
            </figure>
            <div className="card-body">             
                <h2 className="card-title justify-center font-sans font-bold text-2xl text-orange-950 text-[32px] ">Quarto Duplo Básico</h2>
                
                {/* Sublinhado */}
                <div className='underline-custom w-[13.5em] flex items-center justify-center mx-auto -mt-2'></div>
                    <p className='text-justify leading-4 font-sans text-[20px] text-black-950 mt-4 font-extralight'>Desfrute de conforto e elegância em nosso quarto premium, perfeito para uma estadia relaxante. Quarto para 2 pessoas, não incluindo frigobar.</p>
                

                {/* Rodapé do card */}
                <div className='grid grid-cols-2 '>

                    {/* Lado esquerdo */}
                    <div>
                        <span className='italic font-sans3 text-[16px] text-orange-950 font-light'>A Partir De:</span>
                            <p className='text-[26px] text-orange-950 font-sans2 font-extrabold mt-2'>R$ 129,90</p>
                    </div>

                    {/* Lado direito */}
                    <div className="card-actions justify-end">
                        <button className="text-black-50 shadow-inner shadow-black-400 w-[120px] h-[51px] md:mt-[21px] lg:mt-[21px] rounded-none bg-orange-850 font-sans text-[25px] font-extralight hover:bg-orange-150 transition-colors">Reservar</button>
                    </div>
                </div>

                
            </div>
        </div>




        
      </div>
    </div>
  );
};

export default Cards;
