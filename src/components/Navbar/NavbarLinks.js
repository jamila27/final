/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Fr from "../../assets/flags/france.png";
import An from "../../assets/flags/us.png";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button
      href="/login"
      color="transparent"
      className={classes.navLink}
    >
    Se connecter 
    </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/registersync"
          color="transparent"
          className={classes.navLink}
        >
        S'inscrire
        </Button>
      </ListItem>

     
      
      <ListItem className={classes.listItem}>
        
          <Button
            
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
      
      </ListItem>
      
      <ListItem className={classes.listItem}>
        
          <Button
            color="transparent"
            
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
       
          <Button
            color="transparent"
            
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
      </ListItem>
      

  <ListItem className={classes.listItem}>
  <CustomDropdown
    
    buttonText="Langue"
    buttonProps={{
      
      color: "transparent"
    }}
    dropdownList={[
      <Link to="/" >
      <img src={Fr}/> Français 
      </Link>,
      <Link to="/" >
      <img src={An}/> Anglais 
      </Link>
      
    ]}
  />
</ListItem>
    </List>
  );
}
