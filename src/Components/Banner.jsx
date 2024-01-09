import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
            <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>Welcome To <span className='text-green-500'>My Website</span></h1>
                <p data-aos='fade-left'>A great person once said: <span className='italic font-semibold'>Si puedes imaginarlo, puedes programarlo. / If you can imagine it, you can program it</span>.</p>
                <div className='flex mt-8 gap-2'>
                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-2'>
                            <a href="https://github.com/totimang" target='blank' className='text-green-600 hover:text-green-500 rounded-full glow p-2'>
                                <AiFillGithub className='text-[28px]' />
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigodmartinez/" target='blank' className='text-green-600 hover:text-green-500 rounded-full glow p-2'>
                                <FaLinkedinIn className='text-[28px]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <img data-aos='fade-up' src='https://i.ibb.co/hd8rNPQ/perfil.png' width={290} height={290} className='rounded-full border-2 p-1 border-green-500 img_glow' alt="" />
        </div>
    );
};

export default Banner;