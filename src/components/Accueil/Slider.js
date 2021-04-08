

import AwesomeSlider from 'react-awesome-slider';
import styles from 'react-awesome-slider/src/styles.js';
import { Button } from 'react-bootstrap'
import '../../styles/Slider.css';

import withAutoplay from 'react-awesome-slider/dist/autoplay';

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/img.jpg'
import image3 from '../../assets/images/image2.jpg'
import { Link } from 'react-router-dom';

const AutoplaySlider =withAutoplay(AwesomeSlider);


export default function slider (){
    return (
        <AutoplaySlider
        cssModule={styles}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
        caption='I want to see what you got.'
    
      >
      
      <div data-src={image1} >

      <div className="carousel-caption ">
    
      <h1 className="caption">Passionné de sport ?</h1>
      <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
      <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
      <Link to="/login"><Button className='btn-cnx'>Connectez-vous !</Button>{' '}</Link>
      </div>
     </div>

     
     
    <div data-src={image2} >
    <div className="carousel-caption ">
    
    <h1 className="caption">Passionné de sport ?</h1>
    <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
    <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
    <Link to="/login"><Button className='btn-cnx'>Connectez-vous !</Button>{' '}</Link>
    </div>
    
    </div>
    <div data-src={image3} >
    <div className="carousel-caption ">
    
    <h1 className="caption">Passionné de sport ?</h1>
    <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
    <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
    <Link to="/login"><Button className='btn-cnx'>Connectez-vous !</Button>{' '}</Link>
    </div>
    </div>
    </AutoplaySlider>
    );
}

