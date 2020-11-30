import React, { useEffect, useState } from "react";
import Recipe from './Recipe'
import './style.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import hero from './img/frontpaleta1_0020.png';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
  const APP_ID = "cbc693bb";
  const APP_KEY = "31a6a25bf997d2c9194682df6279e50a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  if(recipes.length === 0){
    return <div className="loader">
      <CircularProgress />
    </div>
  }
  

  return (

    <div className="App"> 
        <div className="hero-main">
          <div className="hero-flex">
            <div className="hero-para">
              <h1 className="hero-h">A RECIPE FOR GOOD TIMES</h1>
              <p className="hero-p">Choose your favorite recipe which give you great taste , for life time and share with your friend and family which gives you a God bless.</p>
              <Link to="" className="btn-main"><span>Learn More</span></Link>
            </div>
              <img className="hero-image" src={hero} alt=""/>
          </div>
        </div>
        <div className="content">
        
          <h1 className="search_h1">Search Your Favorite</h1>
          <form onSubmit={getSearch} className="search-form">
              <input 
              className="search-bar" 
              type="text" 
              value={search} 
              onChange={updateSearch}
              placeholder="Search for your items.."
              />
              <button className="search-button" type="submit">
               <a className="icon1_search" href=""><SearchIcon/></a>
               
             </button>
             
          </form>
        
          <div className="recipes">
            {recipes.map(recipe =>(
                <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image ={recipe.recipe.image}  
                ingredients = {recipe.recipe.ingredients}
                />
            ))}
         </div>
        </div>
    </div>


    )
}

export default App;
