// import React from 'react';
// import { Carousel, Button} from 'react-bootstrap'
// // import { Button } from './Button';
// import { Image } from 'semantic-ui-react'

// import '../styles/Slider.css';

// import image1 from '../assets/images/image1.jpg'
// import image2 from '../assets/images/img.jpg'
// import image3 from '../assets/images/image2.jpg'

// const Slider = () => {
//   return (
//     <Carousel fade={true} pause={false}>
//       <Carousel.Item className="carousel" interval={4000}>
//         <img
//           className="d-block w-100"
//           src={image1}
//           alt="First slide"
//         />
//         <Carousel.Caption className="carousel-caption" responsive>
//           <h1 className="caption">Passionné de sport ?</h1>
//           <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
//           <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
        
//           <Button href="/registersync" className='inscri-item' size='lg'>S'inscrire</Button>
//           <Button href="/login"  className='cnx-item' size='lg'>Se connecter</Button>

//           <style type="text/css">
//         {`
//         .cnx-item {
//           background-color: #f97304 ;
//           color: white;
//           font-weight: bold;
//           border: 3px solid #f97304;
//           border-radius: 20px;
          
//           margin-left : 30px;
          
          
//         }
    
//         .cnx-item:hover {
//           background-color: #095b7c ;
//           color: white;
//           font-weight: bold;
//           border: 3px solid #095b7c;
          
//         }

//         .inscri-item {
//           background-color: #095b7c ;
//           color: white ;
//           font-weight: bold;
//           border-radius: 20px;
//           border: 3px solid #095b7c ;
//           margin-left : 30px;
          
//         }
    
//         .inscri-item:hover {
//           background-color: #f97304 ;
//           color: white;
//           font-weight: bold;
//           border: 3px solid #f97304;
          
//         }
    
//         .
//         `}
//       </style>
          
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={4000}>
//         <img
//           className="d-block w-100"
//           src={image2}
//           alt="Second slide"
//         />
//         <Carousel.Caption className="carousel-caption">
//           <h1 className="caption">Passionné de sport ?</h1>
//           <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
//           <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
//           <Button href="/registersync" className='inscri-item' size='lg'>S'inscrire</Button>
//           <Button href="/login"  className='cnx-item' size='lg'>Se connecter</Button>
        
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={4000}>
//         <img
//           className="d-block w-100"
//           src={image3}
//           alt="Third slide"
//         />
//         <Carousel.Caption className="carousel-caption">
//           <h1 className="caption">Passionné de sport ?</h1>
//           <p className="caption1">Vous êtes bien au bon endroit pour accéder aux  événements sportifs, trouver des partenaires de jeu, déposer des challenges, trouver un club et déposer un terrain de sport.</p>
//           <p className="caption2">Connectez-vous ou créez votre compte pour découvrir toutes les fonctionnalités !</p>
//           <Button href="/registersync" className='inscri-item' size='lg'>S'inscrire</Button>
//           <Button href="/login"  className='cnx-item' size='lg'>Se connecter</Button>
        
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   )
// }

// export default Slider;

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

