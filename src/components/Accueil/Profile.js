import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import EventIcon from '@material-ui/icons/Event';
import TerrainIcon from '@material-ui/icons/Terrain';
// core components
import Header from "../Header/Header.js";
// import Footer from "../Footer/Footer.js";
import Button from "../CustomButtons/Button.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import HeaderLinks from "../Header/HeaderLinks.js";
import NavPills from "../NavPills/NavPills.js";
import Parallax from "../Parallax/Parallax.js";

import profile from "../../assets/img/faces/christian.jpg";
import parse from 'parse-json';
import axios from 'axios';
import { List } from 'semantic-ui-react'

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";

import imgev from '../../assets/images/tennis.jpg'

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import { Image, Divider } from 'semantic-ui-react'
const useStyles = makeStyles(styles);



export default function Profile(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const [user, setUser] = useState(parse(localStorage.getItem('user')))
  const [details, setDetails] = useState({
    id: '',
    nomprenom: '',
    pseudo: '',
    tel: '',
    mail: '',
    mdp: '',
    img: '',
    dateNaiss: '',
    adress: '',
    ville: '',
    sexe: '',
    sports: [],
  })


  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/user/details/${JSON.stringify(user.id)}`)
      .then(response => {
        setDetails(

          details.id = response.data._id,
          details.nomprenom = response.data.nomprenom,
          details.pseudo = response.data.pseudo,
          details.tel = response.data.tel,
          details.mail = response.data.mail,
          details.mdp = response.data.mdp,
          details.img = response.data.img,
          details.dateNaiss = response.data.dateNaiss,
          details.adress = response.data.adress,
          details.ville = response.data.ville,
          details.sexe = response.data.sexe,
          details.sports = response.data.sports,

        )

        console.log(details.pseudo);
        console.log(details.tel);
      });
  }, []);


  return (
    <div>

      <Parallax small filter image={require("../../assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <div className={classes.profile}>
                  <div>
                    <img src={user.img} alt="..." className={imageClasses} />
                  </div>


                  <div className={classes.name}>
                    <h3 className={classes.title}>{user.pseudo}</h3>
                    <br></br><br></br><br></br>
                    <List floated='left'  >
                      <List.Item >

                        <List.Content>

                          <h5> <List.Icon name='user' />Nom et prénom : </h5>
                          <h6>{user.nomprenom}</h6>
                        </List.Content>
                      </List.Item>

                      <List.Item >

                        <List.Content>

                          <h5> <List.Icon name='mail' /> Email : </h5>
                          <h6>{user.mail}</h6>
                        </List.Content>
                      </List.Item>

                      <List.Item >

                        <List.Content>

                          <h5> <List.Icon name='marker' />Adresse : </h5>
                          <h6>{user.adress}</h6>
                        </List.Content>
                      </List.Item>
                      <List.Item >

                        <List.Content>

                          <h5> <List.Icon name='phone square' />Téléphone : </h5>
                          <h6>{user.tel}</h6>
                        </List.Content>
                      </List.Item>
                      <List.Item >

                        <List.Content>

                          <h5> <List.Icon name='like' />Sports préférés :</h5>
                          <h6>{user.sports}</h6>
                        </List.Content>
                      </List.Item>
                    </List>


                    <style type="text/css">
                      {`
          
                    h5 {
                      color: #f97304;
                      font-weight: bold;
                      float:left;
                      width:60%;
                      align-items : left;
                      
                    }

                    h6 {
                      margin-left:60%  
                    }

                    List {
                      align : left ;
                    }

                    List.Content {
                      alig-items : center ;
                    }

                    
                      
                  
                    `}
                    </style>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>

            </div>
            <br></br><br></br><br></br><br></br><br></br>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="#f97304"
                  tabs={[
                    {
                      tabButton: "Mes événements",
                      tabIcon: EventIcon,
                      tabContent: (
                        <GridContainer >
                          <GridItem xs={12} sm={12} >

                            <div>
                              <Image src={imgev} size='small' verticalAlign='top' />{' '}
                              <span>Titre de l'Event</span>

                            </div>


                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Mes participations",
                      tabIcon: EmojiEventsIcon,
                      tabContent: (
                        <GridContainer >
                          <GridItem xs={12} sm={12} >

                            <div>
                              <Image src={imgev} size='small' verticalAlign='top' />{' '}
                              <span>Titre de l'Event</span>

                            </div>


                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Mes terrains ",
                      tabIcon: TerrainIcon,
                      tabContent: (
                        <GridContainer >
                          <GridItem xs={12} sm={12} >

                            <div>
                              <Image src={imgev} size='small' verticalAlign='top' />{' '}
                              <span>Titre de l'Event</span>

                            </div>


                          </GridItem>
                        </GridContainer>

                      )
                    }
                  ]}
                />
              </GridItem>
              <br></br><br></br><br></br><br></br>
            </GridContainer>

          </div>
        </div>
      </div>

    </div>
  );
}
