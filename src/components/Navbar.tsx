import Logo from '../app/assets/logo_navbar.png'


const Navbar = () => {
  return (
    <div className="navbar bg-base-100 -mt-[20em] opacity-70 rounded-2xl bg- shadow-md shadow-black-900">
      <div className="navbar-start">
        
        <div className="dropdown">
          
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 4</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl"> <img src={Logo.src} className='h-12'/></a>
      </div>
      
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-5 gap-14 ">
          <li><a className='hover:bg-orange-800'>Quem somos</a></li>
          <li><a className='hover:bg-orange-800'>Destaques</a></li>
          <li><a className='hover:bg-orange-800'>Destaques</a></li>
          <li><a className='hover:bg-orange-800'>Localização</a></li>
          
        </ul>
      </div>

    </div>
  )
}

export default Navbar