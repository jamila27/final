import React from 'react';
import '../../styles/Cards.css';

import CardItem from './CardItem';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react'
import { Button } from 'react-bootstrap'
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar2.png'
import avatar3 from '../../assets/images/avatar3.png'


import fan1 from '../../assets/images/fan.jpg'
import fan2 from '../../assets/images/fan1.jpg'
import fan3 from '../../assets/images/fan4.jpg'


function Cards() {
  return (
    <div className='cards'>
     

      <div className='cards__container'>
        <Card.Group itemsPerRow={3}>


          <Card>
            <Image src={fan1} wrapped ui={false}></Image>

            <Card.Content>
              <Image
                floated='left'
                size='mini'
                src={avatar2}
              />
              <Card.Header>Lolita</Card.Header>
              <Card.Meta>40 amis</Card.Meta>
              <br></br>
              <Card.Description>
                J'ai rencontré la personne idéale pour m'accompagner dans mes cours de yoga grâce à SportShare.
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
            <Link to='/register'> <Button className='btn-card'>Vivre cette expérience</Button></Link>
            </Card.Content>

          </Card>


          <Card>
            <Image src={fan2} wrapped ui={false}></Image>

            <Card.Content>
              <Image
                floated='left'
                size='mini'
                src={avatar3}
              />
              <Card.Header>Bruno</Card.Header>
              <Card.Meta>Coach</Card.Meta>
              <br></br>
              <Card.Description>
                J'ai créé une équipe exceptionnelle de volley-ball grâce à SportShare.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Link to='/register'><Button className='btn-card'>Vivre cette expérience</Button></Link>
            </Card.Content>

          </Card>

          <Card>
            <Image src={fan3} wrapped ui={false}></Image>

            <Card.Content>
              <Image
                floated='left'
                size='mini'
                src={avatar1}
              />
              <Card.Header>Steve</Card.Header>
              <Card.Meta>140 amis</Card.Meta>
              <br></br>
              <Card.Description>
                J'ai participé à plusieurs compétitions de cyclisme et j'ai eu plusieus trophées grâce à SportShare.
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Link to='/register'> <Button className='btn-card'>Vivre cette expérience</Button></Link>
            </Card.Content>

          </Card>

        </Card.Group>


      </div>
    </div>
  );
}

export default Cards;