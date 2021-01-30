

const Project = (props) => {
    const redir = () => {
        window.location = props.link;
    }
    return (
        <>
        <div class="card" onClick = {redir}>
            <div class="container">
                <h5><b>{props.project}</b></h5> 
                <p></p>
                <a href = {props.link}>Check it out!!!</a> 
            </div>
        </div>
        </>
    );
}

export default Project;