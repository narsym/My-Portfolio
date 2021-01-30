import Project from './Project';

const Projects = () => {
    return (
        <>
        <div class = 'project' id = 'Project'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path fill=" #63a4ff" fillOpacity="1" d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320
                ,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div class = 'proDiv'>
                <h1> Projects </h1>
                <div class = 'cerDiv'>
                    <Project project = 'Live Weather App' link = 'https://github.com/narsym/weather-app'/>
                    <Project project = 'My Portfolio' link = 'https://github.com/narsym/My-Portfolio'/>
                    <Project project = 'Library Management System' link = 'https://github.com/narsym/Library-Management-System'/>
                    <Project project = 'Facial Expression Detection' link = 'https://github.com/narsym/facial-expression-detection'/>
                    <Project project = 'Chest x-ray classification' link = 'https://github.com/narsym/Chest-X-Ray-Images-Pneumonia-classification'/>
                    <Project project = 'Sign Language Detection' link = 'https://github.com/narsym/sign-language-detection'/>
                    <Project project = 'Fore more visit my github' link = 'https://github.com/narsym'/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;