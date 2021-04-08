import React, { useState } from 'react';
// import '../../styles/components/_Navbar.scss';
import HomeIcon from '@material-ui/icons/Home';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
// import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
// import ChatIcon from '@material-ui/icons/Chat';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Group from '@material-ui/icons/Group';
import Terrain from '@material-ui/icons/Terrain';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import SportsIcon from '@material-ui/icons/Sports';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Logout from '../Log/Logout';

// import Association from '../../assets/images/association.png'
// import Club from '../../assets/images/club.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: '#095b7c',
    cursor: 'pointer',
    fontWeight: 'bolder',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },

    '&:hover': {
      color: '#f97304',
    },

  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    }
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },

    color: '#095b7c',
    cursor: 'pointer',

  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },

    color: '#095b7c',
    cursor: 'pointer',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to="/profil"><MenuItem onClick={handleMenuClose}>Mon profile</MenuItem></Link>
      <MenuItem onClick={handleMenuClose}>Se déconnecter</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Link to="/calendrier">
            <HomeIcon />
          </Link>

        </IconButton>
        <p>Fil d'actualités</p>
      </MenuItem>
      <MenuItem>

        <IconButton aria-label="show 4 new mails" color="inherit" onClick={() => { window.location = '/calendrier' }} > <EventOutlinedIcon />
        </IconButton>
        <p>Calendrier</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">

          <DescriptionOutlinedIcon />

        </IconButton>
        <p>Blog</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.grow}>
      <AppBar color="#white" position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>


          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon fontSize="large" style={{ color: '#095b7c' }}  />
          </IconButton>




          <Typography className={classes.title} variant="h6" noWrap>
            SportShare
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="large" style={{ color: '#095b7c' }} />
            </div>
            <InputBase
              placeholder="Rechercher…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton >

              <Link to="/home"><HomeIcon fontSize="large" style={{ color: '#095b7c' }} /></Link>

            </IconButton>
            <Link to="/calendrier"> 
            <IconButton >

              <EventOutlinedIcon fontSize="large" style={{ color: '#095b7c' }} />

            </IconButton>
            </Link>
            <Link to="/blog"> <IconButton >

              <DescriptionOutlinedIcon fontSize="large" style={{ color: '#095b7c' }}  />
            </IconButton>
            </Link>

            <Link to="/blog" >  
            <IconButton  >
              <Badge badgeContent={4} color="secondary">
                <MailIcon fontSize="large" style={{ color: '#095b7c' }}  />
              </Badge>
            </IconButton>
            </Link>

            <Link to="/notification" >  
             <IconButton >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon fontSize="large" style={{ color: '#095b7c' }}  />
              </Badge>
            </IconButton>
            </Link>

            <Link to="/" >
              <IconButton

                onClick={handleProfileMenuOpen}
                
              >
                <AccountCircle fontSize="large" style={{ color: '#095b7c' }}  />
              </IconButton>
            </Link>

            <Link to="/"  style={{ color: '#095b7c' }} >
              <Logout fontSize="large" style={{ color: '#095b7c' }} />
            </Link>

          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon fontSize="large" style={{ color: '#095b7c' }}   />
            </IconButton>





            <style type="text/css">
            {`
            .menu-btn {
              color: #095b7c;
            }

            

            `}
        </style>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <br></br>
        <List>
          <Link to="/amis">
            <ListItem>
              <ListItemIcon><PersonIcon fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Amis</ListItemText>
            </ListItem>
          </Link>

          <Link to="/joueurs">
            <ListItem>
              <ListItemIcon><SportsHandballIcon fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Joueurs</ListItemText>
            </ListItem>
          </Link>

          <Link to="/">
            <ListItem>
              <ListItemIcon><FlagIcon fontSize="large" style={{ color: '#095b7c' }}/></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Clubs sportifs</ListItemText>
            </ListItem>

          </Link>
          <Link to="/">
            <ListItem>
              <ListItemIcon><Group fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Associations sportives</ListItemText>
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem>
              <ListItemIcon><SportsIcon fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Coachs privé</ListItemText>
            </ListItem>

          </Link>
          <Link to="/">
            <ListItem>
              <ListItemIcon><Terrain fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Terrains</ListItemText>
            </ListItem>
          </Link>
          <Link to="/ListeEvenements">
            <ListItem>
              <ListItemIcon><EmojiEventsIcon fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Evénements</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to="/ListeEvenements">
            <ListItem>
              <ListItemIcon><SettingsIcon fontSize="large" style={{ color: '#095b7c' }} /></ListItemIcon>
              <ListItemText style={{ color: '#095b7c' }} >Paramètres</ListItemText>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}








































