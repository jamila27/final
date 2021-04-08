import React from 'react';
import '../../styles/Footer.css';
// import { Button } from './Button';
import { Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"


function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Langues</h2>
            <li>Anglais </li>
            <li>Français </li>
            <li>Arabe </li>
          
          </div>
          <div class='footer-link-items'>
            <h2>A propos de SportShare</h2>
            <li>Qui sommes nous ?</li>
            <li>Nous rejoindre</li>
            <li>Blog</li>
            <li>Partenaires</li>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Fonctionnalités</h2>
            <li>Accueil</li>
            <li>Espace joueur</li>
            <li>Espace professionnel </li>
            <li>Connexion</li>
            <li>Inscription</li>
          </div>
          <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
          Avez-vous des questions ?
          </p>
          {/* <p className='footer-subscription-text'>
          Inscrivez-vous à la newsletter
          </p> */}
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='text'
                type='text'
                placeholder='Entrez votre message..'
              />
              <Button className='btn--send'>Envoyer</Button>
              
              <style type="text/css">
              {`
  
            .btn--send {
              margin-right: -100px; 
              background-color: white ;
              
              border-radius: 5px;
              color: white;
              font-weight: bold;
              background-color: #f97304;
              border: 3px solid #f97304;
            }
  
            .btn--send:hover {
              color: white;
              font-weight: bold;
              background-color: #f97304;
              border: 3px solid #f97304;
            }
  
  
            `}
  
            </style>
            </form>
          </div>
        </section>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div className='social-logo'>
            SportShare
            
            </div>
          </div>
          {/* <small class='website-rights'>TRVL © 2020</small> */}
          <div class='social-icons'>
            <div
              className='social-icon-link facebook'
              
            >
              <FaFacebook/>
            </div>
            <div
              className='social-icon-link instagram'
             
            >
              <FaInstagram/>
            </div>
            <div
              className='social-icon-link youtube'
              
            >
              <FaYoutube/>
            </div>
            <div
              className='social-icon-link twitter'
             
            >
            <FaTwitter/>
            </div>
            <div
              className='social-icon-link twitter'
             
            >
              <FaLinkedin/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;