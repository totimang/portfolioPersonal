import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaCode } from "react-icons/fa";

const Projets = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div id='Projets' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-green-500'>Projects</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
                <div data-aos='fade-up'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>Online store</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 mb-2 border-2 border-green-800 b_glow' src='https://i.ibb.co/k588msP/proj1.png' alt="Proyecto de una tienda online" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/tiendaConReact" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                        <a href="https://tienda-de-accesorios.netlify.app/" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <FaCode className='text-[25px]' /><span>View site</span>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-down'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>TODO</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 border-2 border-green-800 b_glow' src='https://i.ibb.co/ZL887mP/proj2.png' alt="Proyecto para realizar una lista" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/todoConReact" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                        <a href="https://totimang.github.io/todoConReact/" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <FaCode className='text-[25px]' /><span>View site</span>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-up'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>Memo game</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 border-2 border-green-800 b_glow' src='https://i.ibb.co/VV4DJ3G/proj3.png' alt="Proyecto sobre un juego de memoria" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/memoJuego" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                        <a href="https://totimang.github.io/memoJuego/" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <FaCode className='text-[25px]' /><span>View site</span>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-down'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>Animated rabbits</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 border-2 border-green-800 b_glow' src='https://i.ibb.co/hf70P58/proj4.png' alt="Proyecto de unos conejos animados con css" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/ConejosAnimados" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                        <a href="https://totimang.github.io/ConejosAnimados/" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <FaCode className='text-[25px]' /><span>View site</span>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-down'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>Calculator</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 border-2 border-green-800 b_glow' src='https://i.ibb.co/LPFmWwX/proj5.png' alt="Proyecto de una calculadora" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/CalculadoraJs" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                        <a href="https://totimang.github.io/CalculadoraJs/" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <FaCode className='text-[25px]' /><span>View site</span>
                        </a>
                    </div>
                </div>
                <div data-aos='fade-down'>
                    <h2 className='text-[20px] text-center font-semibold text-green-800 py-2 mb-2 uppercase'>Games with forms</h2>
                    <img height={350} width={250} className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-3xl p-1 border-2 border-green-800 b_glow' src='https://i.ibb.co/VWmrCf5/proj6.png' alt="Proyecto con juegos en varios formularios" />
                    <div className='flex space-x-2'>
                        <a href="https://github.com/totimang/JuegosForm" target='blank' className='text-white hover:text-green-800 transition-all duration-150 ease-in-out p-2 flex space-x-2'>
                            <AiFillGithub className='text-[25px]' /><span>Repository</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projets;