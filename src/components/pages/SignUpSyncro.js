import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import { Button } from 'semantic-ui-react'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Image} from 'react-bootstrap'

import image from '../../assets/images/fan2.jpg'
import { FaArrowLeft } from "react-icons/fa"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: {image},
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginLeft: '220px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpSyncro() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
    
    

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <div className="title">
        
           
            <h1>
            Bienvenue dans votre <br></br> communauté sportive <br></br> SportShare
            </h1>

        </div>


         

          <p className="text"> Veuillez vous identifier. <br></br>  Qui êtes vous ?</p>
          <form className={classes.form} noValidate>
          <Button href="/register" className="btn" content='Joueur' icon='right arrow' labelPosition='right' /><br></br><br></br>
          <Button className="btn" content='Coach privé' icon='right arrow' labelPosition='right' /><br></br><br></br>
          <Button className="btn" content='Club sportif' icon='right arrow' labelPosition='right' /><br></br><br></br>
          <Button className="btn" content='Association sportive' icon='right arrow' labelPosition='right' /><br></br><br></br>
          <Button className="btn" content='Sponsor' icon='right arrow' labelPosition='right' /><br></br><br></br>
          
          <style type="text/css">
          {`

          h1{
            letter-spacing: 0em;
                                color : #095b7c;
                                font-weight: bold;
          }


              .arrow {
 
                margin-left : -500px;
                margin-top : -30px;
               
                color : #095b7c;
                cursor: pointer;


              }
              .arrow:hover {
                color: #f97304;

              }
               .text {
                margin-top : 50px;
                 margin-left : -85px;
                 font-size : 15px;
               }

              .btn {
                width : 50% ;
                
              }

              `}
          </style>
           
            
            <Grid container>
              <Grid item xs>
              Vous avez déja un compte ?
                <Link style={{color:"black"}} className="cnx" href="/login" variant="body2">
                  Se connecter
                </Link>

                <style type="text/css">
          {`

              .cnx {
                margin-left : 8px ;
                color : black;
              }

              `}
          </style>
                
              </Grid>
              
              
            </Grid>
            
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7}  >
      
      <Image className="wallpaper" src={image}></Image>
      <style type="text/css">
          {`

              .wallpaper {
                width : 100% ;
              }

              `}
          </style>
      </Grid>
      
    </Grid>
  );
}