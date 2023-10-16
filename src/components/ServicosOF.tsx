import Motivo01 from '../app/assets/Motivo_01.png'
import Motivo02 from '../app/assets/Motivo_02.png'
import Motivo03 from '../app/assets/Motivo_03.png'
import Motivo04 from '../app/assets/Motivo_04.png'


const ServicosOF = () => {
  return (
    <div>
        <div className="flex items-center justify-center mt-10 max-sm:mb-40">
            <div className="w-[1000px] h-[467px] relative text-black-900 container mx-20 sm:mb-20">
                
                <div className="text-center text-black text-4xl font-sans font-bold">Aproveite uma hospedagem mais completa </div>

                <div className="mt-10 text-center text-[24px] font-extralight font-sans">Nós estamos dedicados a criar uma experiência mais acolhedora durante a sua estadia. Para isso, dispomos de excelentes instalações e contamos com uma equipe de funcionários altamente treinados e qualificados, prontos para proporcionar o mais elevado nível de atendimento e serviços.</div>

                


                <div className="grid grid-cols-4 gap-5 mt-5 max-md:grid max-md:grid-cols-4 max-sm:grid-cols-4 max-sm:hidden ">

                  <div className="carousel-item relative w-full">
                    <img src={Motivo01.src} className="w-full" />
                  </div> 

                  <div className="carousel-item relative w-full">
                    <img src={Motivo02.src} className="w-full" />
                  </div> 

                  <div className="carousel-item relative w-full">
                    <img src={Motivo03.src} className="w-full" />
                  </div> 

                  <div className="carousel-item relative w-full">
                    <img src={Motivo04.src} className="w-full" />  
                  </div>

                </div>


            </div>
        </div>

    </div>
  )
}

export default ServicosOF