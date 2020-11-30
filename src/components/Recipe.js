import React from "react";
import style from "./recipe.module.css";
import './style.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
       <div className={style.recipe}>
           <h1 className="h1-main" >{title}</h1>
           <ol className="recipe-ingredient">
               {ingredients.map(ingredients => (
                   <li>{ingredients.text}</li>
               ))}
           </ol>
        
           <div className="para">
             <p className="para1">calories:</p>
             <p className="para2">{calories}</p>
           </div>
           <img className={style.image} src={image} alt="image"/>
       </div>
    );
}

export default Recipe;