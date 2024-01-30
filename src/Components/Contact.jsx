import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])

    return (
        <div id='Contact' className='p-4 lg:p-20 flex flex-col items-center justify-center'>
            <h1 data-aos='fade-left' className='text-[52px] font-semibold mb-20 leading-normal uppercase text-green-500'>Contact Me</h1>
            <form action="https://formspree.io/f/xnqejbyz" method="POST" className='flex flex-col gap-2 lg:w-1/2'>
                <div className='lg:flex gap-10'>
                    <input className='w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-green-800 b_glow text-xl text-slate-500' placeholder='Enter Your Name' type="text" name='name' id='name'/>
                    <input className='w-full lg:my-3 my-6 rounded-lg bg-slate-800 p-4 border-2 border-green-800 b_glow text-xl text-slate-500' placeholder='Enter Your Email' type="email" name='email' id='email'/>
                </div>
                <textarea className='w-full lg:my-3 my-6 rounded-lg bg-slate-800 p-4 border-2 border-green-800 b_glow text-xl text-slate-500' placeholder='Write You Message...' name="coments" id="coments" cols="20" rows="10"></textarea>
                <button className='neno-button shadow-xl hover:shadow-green-800/50 text-white border-2 border-green-800 bg-green-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10' type="submit">Send</button>
                <input type="hidden" name='_next' value='http://localhost:5173'/>
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    );
};

export default Contact;