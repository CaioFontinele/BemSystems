'use client'
import Formulario from '../../components/Formulario';


export default function Home() {


  return (
    <div className="h-screen md:flex">
      {/* Parte esquerda da tela */}
      <div className="relative overflow-hidden md:flex w-1/2 bg-[url(../app/assets/bg_login1.jpg)] bg-cover i justify-around items-center hidden">
      

        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>

      {/* Parte direita da tela */}
      
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-black-50 text-black-500">
        
      <Formulario/>
      </div>
    </div>
  );
}