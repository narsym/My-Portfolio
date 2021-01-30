import About from './About';
import Me from './Me';
import Work from './Work';
import Certifications from './Certifications';
import Projects from './Projects';
import Footer from './Footer';

const App = () => {
    return (
        <>
        <div class = 'overall'>
            <About/>
            <Me/>
            <Work/>
            <Certifications/>
            <Projects/>
            <Footer/>
        </div>
        </>
    );
}

export default App;