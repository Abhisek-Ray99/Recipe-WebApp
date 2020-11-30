import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Nav() {


    return (
            <nav>
                
                <ul className="nav-links">
                    <img className="gif-two" src="https://media.giphy.com/media/3ohzdYBwEDAe0dPhx6/giphy.gif" alt=""/>
                    <Link className="link-style nav-link-grow-up" to="/"><li>Home</li></Link>
                    <Link className="link-style nav-link-grow-up" to="/explore"><li>Explore</li></Link>
                    <h3 className="logo">Recipe</h3>
                    <Link className="link-style nav-link-grow-up" to="/about"><li>About</li></Link>
                    <Link className="link-style nav-link-grow-up" to="/contact"><li>Contact</li></Link>
                    <img className="gif-two" src="https://media.giphy.com/media/3ohzdYBwEDAe0dPhx6/giphy.gif" alt=""/>
                </ul>
            </nav>
    )
}

export default Nav;
