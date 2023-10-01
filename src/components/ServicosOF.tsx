import ImgServicos from '../app/assets/motivos01.png'

const ServicosOF = () => {
  return (
    <div>
        <div className="flex items-center justify-center mt-7">
            <div className="w-[1590px] h-[467px] relative text-black-900">
                
                <div className="text-center text-black text-4xl font-sans font-bold">Aproveite uma hospedagem mais completa </div>

                <div className="mt-10 text-center text-[24px] font-extralight font-sans">Nós estamos dedicados a criar uma experiência mais acolhedora durante a sua estadia. Para isso, dispomos de excelentes instalações e contamos com uma equipe de funcionários altamente treinados e qualificados, prontos para proporcionar o mais elevado nível de atendimento e serviços.</div>

                <img className="w-[1590px] h-[286px] left-0 top-[181px] absolute" src={ImgServicos.src} />
            </div>
        </div>

    </div>
  )
}

export default ServicosOF