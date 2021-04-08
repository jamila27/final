import React, { useState } from 'react';
import {
  Button, TextareaAutosize, TextField, InputLabel, Select, MenuItem, Container
} from '@material-ui/core';
import { addEvenement, getEvenement } from "../../actions/evenement.actions";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import { Dropdown } from 'semantic-ui-react'
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { FaWindows } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa"
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(0.5),
    marginTop: theme.spacing(2),
    minWidth: 200,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const options = [
  {
    key: 'm', label: 'Homme', value: 'homme'
  },
  {
    key: 'f', label: 'Femme', value: 'femme'
  },
  {
    key: 'o', label: 'Autre', value: 'autre'
  },

];


const sp = [

  { key: 'Football', text: 'Football', value: 'Football' },
  { key: 'Tennis', text: 'Tennis', value: 'Tennis' },
  { key: 'Basketball', text: 'Basketball', value: 'Basketball' },
  { key: 'Course', text: 'Course', value: 'Course' },
  { key: 'Ski', text: 'Ski', value: 'Ski' },
  { key: 'Yoga', text: 'Yoga', value: 'Yoga' },
  { key: 'Equitation', text: 'Equitation', value: 'Equitation' },
  { key: 'Fitness', text: 'Fitness', value: 'Fitness' },
  { key: 'Dance', text: 'Dance', value: 'Dance' },
  { key: 'Escalade', text: 'Escalade', value: 'Escalade' },
  { key: 'Gymnastique', text: 'Gymnastique', value: 'Gymnastique' },
  { key: 'Golf', text: 'Golf', value: 'Golf' },
  { key: 'Musculation', text: 'Musculation', value: 'Musculation' },
  { key: 'Volleyball', text: 'Volleyball', value: 'Volleyball' },
  { key: 'Handball', text: 'Handball', value: 'Handball' },
  { key: 'Vélo', text: 'Vélo', value: 'Vélo' },
  { key: 'Planche à voile', text: 'Planche à voile', value: 'Planche à voile' },
  { key: 'Plongée', text: 'Plongée', value: 'Plongée' },
  { key: 'Karaté', text: 'Karaté', value: 'Karaté' },
  { key: 'Marche', text: 'Marche', value: 'Marche' },
  { key: 'Natation', text: 'Natation', value: 'Natation' },
  { key: 'Boxe', text: 'Boxe', value: 'Boxe' },]

const AjouterForm = () => {
  const [titre, setTitre] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [sport, setSport] = useState("");
  const [minJoueur, setminJoueur] = useState("");
  const [maxJoueur, setmaxJoueur] = useState("");
  const [sexe, setSexe] = useState("");
  const [Niveau, setNiveau] = useState("");
  const [Confidentialite, setConfidentialite] = useState("");
  const [lieu, setlieu] = useState("");
  const [Description, setDescription] = useState("");
  const [minAge, setminAge] = useState("");
  const [maxAge, setmaxAge] = useState("");
  const [file, setFile] = useState();
  const [EvenementPicture, setEvenementPicture] = useState("");

  const classes = useStyles();


  const dispatch = useDispatch();

  const handleEvenement = async () => {
    const data = new FormData();
    data.append('titre', titre);
    data.append('dateDebut', dateDebut);
    data.append('dateFin', dateFin);
    data.append('sport', sport);
    data.append('minJoueur', minJoueur);
    data.append('maxJoueur', maxJoueur);
    data.append('minAge', minAge);
    data.append('maxAge', maxAge);
    data.append('sexe', sexe);
    data.append('Niveau', Niveau);
    data.append('Confidentialite', Confidentialite);
    data.append('lieu', lieu);
    data.append('Description', Description);
    if (file) data.append("file", file);
    await dispatch(addEvenement(data));
    alert("Ajout avec succès");
    // window.location="/home"
  };

  const handlePicture = (e) => {
    setEvenementPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);

  };

  const cancelEvenement = () => {
    setTitre("");
    setDateDebut("");
    setDateFin("");
    setSport("");
    setminJoueur("");
    setmaxJoueur("");
    setSexe("");
    setNiveau("");
    setConfidentialite("");
    setlieu("");
    setDescription("");
    setminAge("");
    setmaxAge("");
  };

  return (
    <Container component="main" className="cnt" maxWidth="sm">

    <br></br><br></br>
    <div className="title">
    <Button
    href="/home"
    startIcon={<FaArrowLeft className="back" />}
  >
  </Button>
      <h1 >
        
            Veuillez remplir les champs pour déposer votre événement.<br></br> C'est rapide !
       </h1>

       </div>
       <br></br><br></br><br></br>
       <style type="text/css">
       {`

       .title {
        display: flex;
        align-items: center;
       }
         .back {
           background-color: transparent ;
           color: #f97304;
           margin-top: -30px;
         }

         .back:hover {
           background-color: transparent ;
           color: #f97304;
         }

 `}

   </style>


      <Grid item xs={24} sm={12}>

        
          <label required htmlFor="btn-upload">
          <div className="imgPreview">
          <img style={{width:"100%" }} alt="img" src={EvenementPicture} alt="" />
          </div>
          <input
          
          
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            onChange={(e) => handlePicture(e)}
             />
          <Button
          fullWidth
            className="btn-choose"
            variant="outlined"
            startIcon={<PhotoCameraIcon  />}
            component="span" >
             Choisir une photo d'événement
          </Button>
        </label>

      </Grid>
      {/* <style type="text/css">
       {`

       .imgPreview {
        text-align: center
        margin: 5px 15px
        height: 200px
        width: 500px
        border-left: 1px solid gray
        border-right: 1px solid gray
        border-top: 5px solid gray
        border-bottom: 5px solid gray
       }

        `}

   </style> */}
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="Titre de l'événement"
            label="Titre de l'événement"
            margin='normal'
            fullWidth required
            value={titre} onChange={(e) => setTitre(e.target.value)} />
        </Grid>

        <Grid item xs={12} sm={6}>

          <FormControl required variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Sport</InputLabel>
            <Select
            
              native
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              label="sport"
              inputProps={{
                name: 'sport',
                id: 'outlined-age-native-simple',
              }}

            >
              <option aria-label="None" value="" />
              <option value={"Football"}>Football</option>
              <option value={"Tennis"}>Tennis</option>
              <option value={"Course"}>Course</option>
              <option value={"Ski"}>ski</option>
              <option value={"Yoga"}>Yoga</option>
              <option value={"Equitation"}>Equitation</option>
              <option value={"Fitness"}>Fitness</option>
              <option value={"Dance"}>Dance</option>
              <option value={"Escalade"}>Escalade</option>
              <option value={"Gymnastique"}>Gymnastique</option>
              <option value={"Golf"}>Golf</option>
              <option value={"Musculation"}>Musculation</option>
              <option value={"Volleyball"}>Volleyball</option>
              <option value={"Karaté"}>Karaté</option>
              <option value={"Marche"}>Marche</option>
              <option value={"Natation"}>Natation</option>
              <option value={"Handball"}>Handball</option>
              <option value={"Boxe"}>Boxe</option>
            </Select>
          </FormControl>

        </Grid>

      </Grid>


      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="datetime-local"
            label="Date début "
            margin="normal"
            variant="outlined"
            type="datetime-local"
            defaultValue="2021-03-01T10:30"
            InputLabelProps={{ shrink: true, }}
            value={dateDebut}
            fullWidth required
            onChange={(e) => setDateDebut(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth required
            margin="normal"
            id="datetime-local"
            label="Date fin"
            type="datetime-local"
            defaultValue="2021-03-01T21:30"
            InputLabelProps={{ shrink: true, }}
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)} />
        </Grid>



      </Grid>



      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl required variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Nombre minimal de joueurs</InputLabel>
            <Select
            
              native
              value={minJoueur}
              onChange={(e) => setminJoueur(e.target.value)}
              label="joueurs"
              inputProps={{
                name: 'joueurs',
                id: 'outlined-age-native-simple',
              }}

            >
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={12} sm={6}>

          <FormControl required variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Nombre maximal de joueurs</InputLabel>
            <Select
            
              native
              value={maxJoueur}
              onChange={(e) => setmaxJoueur(e.target.value)}
              label="joueursmax"
              inputProps={{
                name: 'joueursmax',
                id: 'outlined-age-native-simple',
              }}

            >
              <option aria-label="None" value="" />
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={150}>150</option>
              <option value={200}>200</option>
            </Select>
          </FormControl>


        </Grid>
      </Grid>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>

          <FormControl required variant="outlined" fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" >Sexe </InputLabel>
            <Select
            
              native
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
              label="sexe"
              inputProps={{
                name: 'sexe',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={"Femme"}>Femme</option>
              <option value={"Homme"}>Homme</option>
              <option value={"Autre"}>Autre</option>
              <option value={"Mixte"}>Mixte</option>
            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            name="lieu de l'événement"
            label="lieu de l'événement"
            margin='normal'
            fullWidth required
            value={lieu}
            onChange={(e) => setlieu(e.target.value)} />

        </Grid>

      </Grid>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>

          <FormControl variant="outlined" required fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" >Niveau </InputLabel>
            <Select
            
              native
              value={Niveau}
              onChange={(e) => setNiveau(e.target.value)}
              label="niveau"
              inputProps={{
                name: 'niveau',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={"Débutant"}>Débutant </option>
              <option value={"Moyen"}>Moyen</option>
              <option value={"Excellent"}>Excellent</option>
            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" required fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" >Confidentialité </InputLabel>
            <Select
            
              native
              value={Confidentialite}
              onChange={(e) => setConfidentialite(e.target.value)}
              label="conf"
              inputProps={{
                name: 'conf',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={"Privé"}>Privé</option>
              <option value={"Public"}>Public</option>
              <option value={"Par invitation"}>Par invitation</option>
            </Select>
          </FormControl>


        </Grid>

      </Grid>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={6}>

          <FormControl variant="outlined" required fullWidth className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple" >Age minimal</InputLabel>
            <Select
            
              native
              value={minAge}
              onChange={(e) => setminAge(e.target.value)}
              label="min age"
              inputProps={{
                name: 'minAge',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" required fullWidth className={classes.formControl}>
            <InputLabel  htmlFor="outlined-age-native-simple" >Age maximal</InputLabel>
            <Select
            
              native
              value={maxAge}
              onChange={(e) => setmaxAge(e.target.value)}
              label="maxAge"
              inputProps={{
                name: 'maxAge',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={10}>55</option>
              <option value={15}>65</option>
              <option value={20}>70</option>
              <option value={25}>75</option>
              <option value={30}>80</option>
              <option value={35}>85</option>
              <option value={40}>90</option>
              <option value={45}>95</option>
              <option value={50}>100</option>
            </Select>
          </FormControl>


        </Grid>

      </Grid>

      <Grid container spacing={1}>

        <Grid item xs={24} sm={12}>
          <TextField
          required
            id="outlined-basic"
            variant="outlined"
            name="Description de l'événement"
            label="Description de l'événement"
            margin='normal'
            fullWidth required
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            rowsMax={10} />


        </Grid>
        <Grid item xs={12}>

          <Button type="submit" size="large"
            className='btn--send' fullWidth onClick={handleEvenement}>Enregistrer</Button>

            <br></br><br></br><br></br>
          <style type="text/css">

          
            {`

.btn--send {

background-color: transparent ;
margin-top: 20px;
border-radius: 5px;
color: #f97304;
font-weight: bold;
border: 2px solid #f97304;
margin-bottom : 50px ;
}

.btn--send:hover {
color: white;
font-weight: bold;
background-color: #f97304;
border: 2px solid #f97304;
}

.cnt {
  margin-top : 50px ;
  
}
h1 {
 
                       text-align: justify;
                       margin-bottom : 50px ;
                        letter-spacing: 0em;
                        color : #095b7c;
                        font-weight: bold;
}


`}

          </style>
        </Grid>
      </Grid>


    </Container>

  );

};

export default AjouterForm;