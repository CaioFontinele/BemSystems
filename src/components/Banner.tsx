import Logo from '../app/assets/Logo_monocromatico.png'




const Banner = () => {
  return (
    <div className="max-w-full z-30">
      <div className="flex items-center justify-center bg-hero-image -mt-20 h-[30em] bg-cover z-10
                      sm: max-sm: md: max-md: lg:h-">
        
        <div className="flex items-center justify-center z-20">
          <img src={Logo.src} className='sm:w-2/4 max-sm:w-2/4 md:w-2/4 max-md:w-3/4 lg:w-1/4 bg-black-600 bg-opacity-50 backdrop-blur-sm p-10 rounded-3xl'/>
        </div>
        
      </div>
      
          

    </div>
    
  )
}

export default Banner