import facebookLogo from '../app/assets/face_footer.png'
import instagramLogo from '../app/assets/insta_footer.png'
import logo from '../app/assets/logo_footer.png'
import whatsappLogo from '../app/assets/whats_footer.png'
import Map from './Map'


const Footer = () => {
  return (
    <div>
      <div>
        <span className='flex items-center justify-center mt-20 p-2 font-Thasadith text-xl text-black-50 bg-orange-450'>Onde nos localizamos</span>
        <Map />
      </div>


      <footer className="footer p-10 bg-orange-450 text-base-content">
        <aside className='flex items-center justify-center flex-col'>
          <img src={logo.src}/>
          <p>BEMsystems Industries Ltd.<br/>Providing reliable tech since 2023</p>
          <div className='grid grid-cols-3 gap-5'>
            <div> <img src={instagramLogo.src} /> </div>
            <div> <img src={facebookLogo.src} /> </div>
            <div> <img src={whatsappLogo.src}/> </div>
          </div>
        </aside> 
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  )
}

export default Footer