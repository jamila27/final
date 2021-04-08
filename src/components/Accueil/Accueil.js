 import React from 'react';

 import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

 import Navbar from '../Navbar/Navbar'
 import NavbarLinks from '../Navbar/NavbarLinks'
 import Slider from './Slider'
 import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

// import Slider from '../Slider';
 import Body from './Body';
 import Footer from './Footer';

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

function Accueil(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
     <div>
     
     <div>

     
      <Navbar
        color="transparent"
        routes={dashboardRoutes}
        brand="SportShare"
        rightLinks={<NavbarLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      
    
      <Slider/>
      <Body/>
      <Footer/>

     
     </div>
     
     </div>
    );
  }

export default Accueil;