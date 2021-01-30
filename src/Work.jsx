import Wd from './images/wd.jpg';
import Ml from './images/ml.jpg'
const Work = () => {
    return (
        <>
        <div class = 'work' id = 'Work'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill=" #63a4ff" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320
                ,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div class = 'workDiv'>
                <h1> Work Experience </h1>
                <div class = 'jobs'>
                    <div class="card">
                        <img src={Wd} alt="Avatar"/>
                        <div class="container">
                                <h4>Web Developer intern</h4>
                                <p>Ediko Systems Integrated</p>
                                <ul>
                                    <li>July-2019 - Aug-2019</li>
                                    <li>Developed Library Management System</li>
                                    <li>Worked with a team of six members</li> 
                                </ul>
                        </div>
                    </div>

                    <div class="card">
                        <img src={Ml} alt="Avatar"/>
                        <div class="container">
                            <h4>ML intern</h4>
                                <p>Chattel Technologies</p>
                                <ul>
                                    <li>July-2020 - Aug-2020</li>
                                    <li>Developed Face mask detection, Emotion detection</li>
                                    <li>Worked with a team of three members</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300" class = 'workborder'>
            <path fill=" #fff" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320
                ,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
            <div class = 'clear'></div>
        </div>
        </>
    );
}

export default Work;