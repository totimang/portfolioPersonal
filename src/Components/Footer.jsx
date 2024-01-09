import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className='mb-4 md:mb-0'>
                    <span className='text-3xl font-semibold text-green-800 py-2 uppercase'>totimang</span>
                    <p className='text-[16px] my-4 italic'>If you use your willpower more, you will achieve what you want</p>
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-green-800 py-2 uppercase'>Services</h2>
                    <ul className='text-[16px] my-4'>
                        <li className='my-2'>Web Design</li>
                        <li className='my-2'>Web Development</li>
                        <li className='my-2'>SEO</li>
                        <li className='my-2'>E-commerce</li>
                        <li className='my-2'>Java Developer</li>
                    </ul>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-green-800 py-2 uppercase'>Contact</h2>
                    <p className='text-[16px] my-4'>Email: rod_martinez88@hotmail.com</p>
                </div>
                <div>
                    <h2 className='text-[22px] font-semibold text-green-800 py-2 uppercase'>Follow Me</h2>
                    <div className='flex space-x-4'>
                        <a className='text-white hover:text-green-800 transition-all duration-150 ease-in-out' target='blank' href="https://github.com/totimang">
                            <FaGithub />
                        </a>
                        <a className='text-white hover:text-green-800 transition-all duration-150 ease-in-out' target='blank' href="https://www.linkedin.com/in/rodrigodmartinez/">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;