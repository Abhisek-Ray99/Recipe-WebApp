import React from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './style.css';
import './res.css';

function footer() {
    return (
        <div className="footer-main">
            <img className="footer-gif" src="https://media.giphy.com/media/l0MYAmtpIds1sGOic/giphy.gif" alt=""/>
            <div className="footer-body">
              <div className="footer-info">
               <div className="footer-logo">
                   <h3>Recipe</h3>
                   <div className="footer-contact">
                     <PhoneIcon className="ph"/>
                     <p>+91-5894445247</p>
                   </div>
                   <div className="footer-contact">
                     <MailOutlineIcon className="gm"/>
                     <p>Ricipe88@gmail.com</p>
                   </div>
               </div>
               <div className="footer-sec1">
                  <h2>Our services</h2>
                    <p>Home</p>
                    <p>Explore</p>
                    <p>About</p>
                    <p>Contact</p>
               </div>
               <div className="footer-sec2">
                  <h2>Our information</h2>
                    <p>Privacy Policy</p>
                    <p>Services</p>
                    <p>Find Solution</p>
                    <p>Documentations</p>
               </div>
              </div> 
              <ul className="icon-ul">
                <li>
                    <Link className="icon icon1"><GitHubIcon/></Link>
                </li>
                <li>
                    <Link className="icon icon2"><LinkedInIcon/></Link>
                </li>
                <li>
                    <Link className="icon icon3"><InstagramIcon/></Link>
                </li>
              </ul>
            </div>
            
        </div>
    )
}

export default footer;
