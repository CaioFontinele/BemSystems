import Face from '../app/assets/face_footer.png'
import Insta from '../app/assets/insta_footer.png'
import Logo from '../app/assets/logo_footer.png'
import Whats from '../app/assets/whats_footer.png'
import Map from '../components/Map'


const Footer = () => {
  return (
    <div>
        <div className="flex items-center justify-center mt-32 bg-orange-750 font-Thasadith text-lg text-black-50">
            Onde nos localizamos 
        </div>

        <Map />

        <div className='bg-orange-750'>

          <div className='grid grid-cols-2 text-black-50 gap-48'>

            {/* Esquerdo */}
            <div className='flex flex-col items-center mr-56 justify-start  mt-12 mb-9 '>
              <div>
                <img src={Logo.src}></img>
              </div>

              <span className='mt-4 flex flex-col items-center font-Thasadith'>
                CNPJ: 51.578.801/0001-70 © 2023<p/>Todos os direitos reservados
              </span>

              <div className='grid grid-cols-3 gap-5 mt-5 px-11'>
                <img src={Insta.src} />
                <img src={Whats.src} />
                <img src={Face.src} />
              </div>
            </div>


            {/* Direito */}
            <div className='grid grid-cols-3 gap-9 items-center font-Thasadith mr-10 '>

              <div className='flex flex-col justify-center items-center w-50 h-56 bg-orange-350'>
                <h1 className='font-Thasadith text-2xl'>Termos e condições</h1>
                <div className='underline-custom-white w-40 flex items-center justify-center mx-auto mt-1' />
                  <span className='text-center text-sm mt-4'>
                    É de extrema importância a leitura e compreensão dos nossos termos  
                  </span>
              </div>

              <div className='flex flex-col justify-center items-center w-50 h-56 px-8 bg-orange-350'>
                <h1 className='font-Thasadith text-2xl'>Endereço</h1>
                <div className='underline-custom-white w-16 flex items-center justify-center mx-auto mt-1' />
                  <span className='flex flex-col text-sm justify-center items-center mt-4 w-52'>
                    Rua Nossa Senhora da Conceição<p/> 
                    N* 5656<p/> 
                    Bairro: Toca da onça<p/>
                  </span>
              </div>

              <div className='flex flex-col justify-center items-center w-50 h-56 bg-orange-350'>
                <h1 className='font-Thasadith text-2xl'>Contato</h1>
                <div className='underline-custom-white w-14 flex items-center justify-center mx-auto mt-1' />
                  <span className='mt-4 flex flex-col text-sm justify-center items-center'>
                    email@bemsystems.com.br<p/>
                    Telefones:<p/>
                    086 9 8899-8989<p/>
                    086 9 8899-8989<p/>
                    086 9 8899-8989<p/>
                  </span>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer