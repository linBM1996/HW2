import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react'
import FCRecipes from '../Functional Comps/FCRecipes';
import PhoImg from '../img/Pho.jpg';
import PadThaiImg from '../img/PadThai.jpg';
import ChopSueyImg from '../img/ChopSuey.jpg';

const InitRecipesList = [
    { id: 1, name: "pad thai", img: PhoImg , description: "stir-fry dish, mix all ingredients together" },
    { id: 2, name: "Pho", img: PadThaiImg , description: "slow-cooked soup"},
    { id: 3, name: "Chop Suey", img: ChopSueyImg , description: "5 minute stir fry,add each vegetable in the order in which they cook." },

];

const InitRecipesDoneList = [];

export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RecipesDoneList: InitRecipesDoneList,
            RecipesList: InitRecipesList,
        };
    }

    MoveToRecipes = (Id2Move) => {
        let newRecipesDoneList = this.state.RecipesDoneList.filter(Recipe => Recipe.id !== Id2Move);
        let newRecipe = this.state.RecipesDoneList.filter(Recipe => Recipe.id === Id2Move);

        this.setState({ RecipesDoneList: newRecipesDoneList });
        this.setState({ RecipesList: [...this.state.RecipesList, ...newRecipe] })
    }

    MoveToDoneRecipes = (Id2Move) => {
        let newRecipesList = this.state.RecipesList.filter(Recipe => Recipe.id !== Id2Move);
        let newDoneRecipe = this.state.RecipesList.filter(Recipe => Recipe.id === Id2Move);

        this.setState({ RecipesList: newRecipesList });
        this.setState({ RecipesDoneList: [...this.state.RecipesDoneList, ...newDoneRecipe] });
    }

    render() {
        if (this.state.RecipesDoneList.length === 0) {
            return (
                <div>
                    <FCRecipes RecipesList={this.state.RecipesList} button={"Prepare dish!"} SendId2Move={this.MoveToDoneRecipes} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <div>
                        <FCRecipes RecipesList={this.state.RecipesList} button={"Prepare dish!"} SendId2Move={this.MoveToDoneRecipes} />
                    </div>

                    <h1>Ready to EAT!</h1>
                    <h2>Recipes made:{this.state.RecipesDoneList.length}</h2>
                    <div>
                        <FCRecipes RecipesList={this.state.RecipesDoneList} button={"eat!"} SendId2Move={this.MoveToRecipes} />
                    </div>
                </div>
            )
        }
    }
}
