'use client'

//import Infos from '@/components/Infos'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import ImgInfos from '@/components/ImgInfos'
import ImgeInfos02 from '@/components/ImgeInfos02'
import Informations01 from '@/components/Informations01'
import Navbar from '@/components/Navbar'
import ServicosOF from '@/components/ServicosOF'
import Banner from '../../components/Banner'


export default function dashboard(){
    return <div className='overflow-hidden'>
        <Navbar />
        <Banner />
        <Informations01 />  
        <ServicosOF />  
        <Cards />   
        <ImgInfos /> 
        <ImgeInfos02 />
        <Footer />
    </div>    
}