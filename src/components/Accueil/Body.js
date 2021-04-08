import React from 'react';
import { Col, Row, Button } from 'react-bootstrap'
// import { Button } from './Button';
import { Container } from 'theme-ui';
import Cards from './Cards.js'
import { Card, Grid, Divider, Segment, Image } from 'semantic-ui-react'

import Carousel from "react-elastic-carousel";
import Item from "./Item";



import '../../styles/Body.css';
import bg from '../../assets/images/bg.jpg'

import image4 from '../../assets/images/image4.jpg'

import part1 from '../../assets/images/part1.png'
import part2 from '../../assets/images/part2.png'
import part3 from '../../assets/images/part3.png'
import part4 from '../../assets/images/part4.png'
import part5 from '../../assets/images/part5.png'
// import image3 from '../assets/images/image3.jpg'



const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];




const Body = () => {

  return (

    <div className="body">





      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>



      <Grid className="grid-items" columns={2} relaxed='very' stackable >

        <Grid.Column mobile={16} tablet={8} computer={8}>

          <Divider horizontal> Créez votre communauté</Divider>



          

          <h2 className="content1" >
            Vous êtes professionnel de sport ?
            </h2>
          <p className="content2">
            SportShare vous propose plusieurs services tel que la possibilité de déposer un événement, un cours de sport en ligne, un terrain à louer et gérer le planning des événements. Vous créerez votre communauté sportive grâce à SportShare.
            </p>
          <Button className='btn-voir'>Voir plus</Button>{' '}


        </Grid.Column>

        <Grid.Column className="img-grid">
          <Grid item xs={12} sm={6} >

            <Image className="coach" size='large' src={image4} circular />



          </Grid>
        </Grid.Column>
      </Grid>



      <Grid columns={2} relaxed='very' stackable >

        <Grid.Column >

          <Divider horizontal> Témoignages</Divider>

          <h2 className="content1" >
            Avez-vous besoin de quelques avis ?
          </h2>

        </Grid.Column>

      </Grid>

      <Cards />


      <Grid columns={2} relaxed='very' stackable >

        <Grid.Column >
          <Divider horizontal> Nos partenaires</Divider>
        </Grid.Column>
      </Grid>

      <Grid doubling columns={5}>
        <Grid.Row className="grid" >

        <Carousel breakPoints={breakPoints}>
          <Item>
          <Image className="part1" src={part1} />
          </Item>
          <Item>
          <Image className="part2" src={part2} />
          </Item>
          <Item>
          <Image className="part3" src={part3} />
          </Item>
          <Item>
          <Image className="part4" src={part4} />
          </Item>
          <Item>
          <Image className="part5" src={part5} />
          </Item>
         
        </Carousel>


          


        </Grid.Row>



      </Grid>



      <br></br><br></br><br></br>
    </div>



  );
}

export default Body;