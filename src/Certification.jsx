

const Certification = (props) => {
    return (
        <>
        <div class="card">
            <img src = {props.name} alt="Avatar"/>
            <div class="container">
                <p>{props.course}</p> 
                <p>{props.score}</p> 
            </div>
        </div>
        </>
    );
}

export default Certification;