import Certification from './Certification';
import C from './images/c.png';
import Daa from './images/daa.png';
import Dbms from './images/dbms.png';
import Java from './images/java.png';
import Pdsa from './images/pdsa.png';

const Certifications = () => {
    return (
        <>
        <div class = 'certification' id = 'Certification'>
            <h1> Certifications </h1>
            <div class = 'cerDiv'>
                <Certification name = {Pdsa} course = 'NPTEL - Python' score = '90% - Gold medal'/>
                <Certification name = {Daa} course = 'NPTEL - Design and Analysis of Algorithms' score = '77% - silver medal'/>
                <Certification name = {Dbms} course = 'NPTEL - Database management System' score = '82% - silver medal'/>
                <Certification name = {Java} course = 'NPTEL - Java' score = '87% - silver medal'/>
                <Certification name = {C} course = 'NPTEL - Programming in C' score = '79% - silver medal'/>
            </div>
        </div>
        </>
    );
}

export default Certifications;