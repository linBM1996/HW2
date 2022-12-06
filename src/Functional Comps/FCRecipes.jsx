import "bootstrap/dist/css/bootstrap.min.css";
import FCRecipe from "./FCRecipe";

export default function FCRecipes(props) {
  let RecpiesStr = props.RecipesList.map((Recipe, ind) => {
    return <FCRecipe id={Recipe.id}
      name={Recipe.name}
      img={Recipe.img}
      description={Recipe.description}
      button={props.button}
      key={Recipe.id}
      getIdFromRecipe2Move={() => props.SendId2Move(Recipe.id)} />;
  }
  )
  return (
    <div className="row RecpiesList">
      {RecpiesStr}
    </div>
  );
}