const About = () => {
    return (
        <>
        <nav id = 'navigation'>
        
            <div class="navwrap">
                <a id = 'name' class = 'hidden' href = '#main'> Narasimha Vennelaganti</a>
                <div class = 'navbar'>
                    <a href="#Me">About</a>
                    <a href="#Work">Work</a>
                    <a href="#Certification">Certifications</a>
                    <a href="#Project">Projects</a>
                </div>
            </div>
        </nav>
        <div class="mainDiv" id = 'main'>
            <div class = 'space'></div>
            <p>I am</p>
            <h1>Narasimha Vennelaganti</h1>
            <p>I am a Mern Stack Developer</p>
            <p>I am a AI Enthusiast</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
            <path fill="#fff" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320
                ,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div> 
        </>
    );
}

export default About;