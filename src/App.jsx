import Banner from './Components/Banner';
import Nav from './Components/Nav';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';

const App = () => {
  const [loading, setLoading] = useState (false)
  useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
      }, 700)
    },[])

  return (
    <>
      {
        loading ?
        <div className='bg-slate-900 h-[100vh] flex justify-center items-center'>
          <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          />
        </div>
        
        :
        <div className='bg-slate-900'>
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      }
    </>
  );
};

export default App;
