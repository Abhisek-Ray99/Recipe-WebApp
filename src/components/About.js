import React from 'react';
import './style.css';
import about from './img/about-main.png';

function About() {
    return (
        <div className="head-about">
            <h1 className="about-h1">We are here for you</h1>
            <hr className="brace"/>
            <div className="about-flex">
                   <img className="about-img" src={about} alt=""/>
                <div>
                    <p className="about-p">We source products with integrity, flavor and soul, and incorporate these seasonal offerings into our menu nightly. The result is food that is honest, straightforward and pays homage to the Lowcountry, a special place we are privileged to call home. However, the FIG experience is about more than just food. A sincere effort to educate our staff on all aspects of food and beverage culture is the basis for our service philosophy.  It is our goal that guests feel special, comfortable and well taken care of.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
