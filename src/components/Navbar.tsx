import Logo2 from '../app/assets/Logo_monocromatico.png'
import Logo from '../app/assets/logo_navbar.png'

const Navbar = () => {
  return (
    <div className="navbar bg-black-800 opacity-80 rounded-3xl bg-none font-Thasadith font-bold">
      
      <div className="navbar-start">
        <div className="drawer flex transition-all duration-500">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content"></div>
          

          <label htmlFor='my-drawer' className="btn btn-ghost md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <a className="btn btn-ghost normal-case "><img src={Logo.src}></img></a>

          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content text-lg">
              {/* Sidebar content here */}
              <img src={Logo2.src} className='mb-10 mt-5'/>
              <li><a className='hover:bg-orange-500 hover:text-black-900'>Quem somos</a></li>
              <li><a className='hover:bg-orange-500 hover:text-black-900'>Serviços</a></li>
              <li><a className='hover:bg-orange-500 hover:text-black-900'>Destaques</a></li>
              <li><a className='hover:bg-orange-500 hover:text-black-900'>Espaços</a></li>
            </ul>
          </div>
        </div>
        
      </div>

      <div className="navbar-end  sm:hidden md:flex lg:flex max-sm:hidden">
        <ul className="menu menu-horizontal px-1 flex-nowrap text-lg">
          <li><a className='hover:bg-orange-500 hover:text-black-900'>Quem somos</a></li>
          <li><a className='hover:bg-orange-500 hover:text-black-900'>Serviços</a></li>
          <li><a className='hover:bg-orange-500 hover:text-black-900'>Destaques</a></li>
          <li><a className='hover:bg-orange-500 hover:text-black-900'>Espaços</a></li>
        </ul>
      </div>

      

    </div>
  )
}

export default Navbar