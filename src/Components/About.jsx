const About = () => {
    return (
        <div id='About' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
            <img data-aos='fade-down' src='https://i.ibb.co/H4KDsCy/perfil2.png' width={290} height={290} className='rounded border-2 p-1 border-green-500 img_glow' alt="" />
                <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
                    <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-green-500 uppercase'>About me</h1>
                    <p data-aos='fade-left'>I'm Rodrigo, based in Buenos Aires, Argentina. Passionate about both technology and sports, I find joy in exploring the latest innovations while staying active in the world of sports.</p>
                    <div className='flex mt-8 gap-2'>
                        <div className='flex items-center justify-center'>
                            <div className='flex space-x-2'>
                                <a className='neno-button shadow-lg hover:shadow-green-800/50 text-white border-2 hover:bg-green-800 border-green-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden' target='blank' href='https://drive.google.com/file/d/15gC1MUXsSc6bbOTjiXOwYsqV_0ATTAwt/view?usp=drive_link'>CV</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default About;
