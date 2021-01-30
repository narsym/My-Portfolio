import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const Footer = () => {
    return (
        <>
        <div class = 'footwrap'>
            <p> You can find me here!!!</p>
            <div class = 'footer'>
            <a href = 'https://www.linkedin.com/in/vennelaganti-narasimha-8b5484150/'><LinkedInIcon/></a>
            <a href = 'https://github.com/narsym'><GitHubIcon/></a>
            <a href = 'https://medium.com/@narasimha.00076'><LibraryBooksIcon/></a>
            </div>
        </div>
        </>
    );
}

export default Footer;