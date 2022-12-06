import "bootstrap/dist/css/bootstrap.min.css";

export default function FCRecipe(props) {
    return (
        <div className="col-md-3 col-12 card">
                <div><h3>{props.name}</h3></div>
                <div className="Imgdiv"><img src={props.img} alt="could not load picture" className="RecipeImg" /></div>
                <div><p>{props.description}</p></div>
                <div className="btnDiv"><button onClick={() => props.getIdFromRecipe2Move(props.id)}>{props.button}</button></div>
        </div>
    );
}