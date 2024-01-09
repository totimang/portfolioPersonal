import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div id='Services' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-green-500'>Services</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <h2 data-aos='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>HTML5</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>CSS3</h2>
                <h2 data-aos='fade-up' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>JavaScript</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>React</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>JAVA</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>C++</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>MySQL</h2>
                <h2 data-aos='fade-down' className='text-[26px] flex items-center justify-center font-semibold text-green-800 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-green-800 b_glow'>Python</h2>
            </div>
        </div>
    );
};

export default Services;