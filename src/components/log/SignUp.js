import React, { Component } from 'react';
import axios from 'axios';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import ReactDOM from 'react-dom';
import { AxiosRequestConfig } from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import 'semantic-ui-css/semantic.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Header, Icon, Dropdown } from 'semantic-ui-react'
import { FaOptinMonster } from 'react-icons/fa';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import { FaArrowLeft } from "react-icons/fa"

// var AvatarCropper = require("react-avatar-cropper");
import Cropper from 'react-easy-crop'
import AvatarEditor from "react-avatar-editor";
import Avatar from '@material-ui/core/Avatar';
import RaisedButton from '@material-ui/core/Button';
// import { RaisedButton } from '@material-ui/RaisedButton';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';



const options = [
  {
    key: 'm', label: 'Homme', value: 'Homme'
  },
  {
    key: 'f', label: 'Femme', value: 'Femme'
  },
  {
    key: 'o', label: 'Autre', value: 'Autre'
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




  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

// function beforeUpload(file) {
//     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//     if (!isJpgOrPng) {
//       message.error('You can only upload JPG/PNG file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 2;
//     if (!isLt2M) {
//       message.error('Image must smaller than 2MB!');
//     }
//     return isJpgOrPng && isLt2M;
//   }


const onPreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;

  const imgWindow = window.open(src);
  imgWindow.document.write(image.outerHTML);
  this.setState({
    imageUrl: image,
    loading: false,
  });
}

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      danger: false,
      nom: '',
      pseudo: '',
      tel: '',
      mail: '',
      img: '',
      dateNaiss: '',
      adresse: '',
      ville: '',
      sexe: '',
      mdp: '',
      mdp2: '',
      sportFavoris: [],
      message: '',
      inscrit: false,
      img2: '',
      imgSrcExt: null,
      images: [],
      bio: '',
      role: '',
      sexe: '',
      connected: false,

      cropperOpen: false,
      zoom: 2,
      croppedImg: '',

      loading: false,
      previewVisible: false,
      previewImage: '',

    }
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeSport = this.changeSport.bind(this);
    this.changeSexe = this.changeSexe.bind(this);
    this.changeNom = this.changeNom.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changeMdp1 = this.changeMdp1.bind(this);
    this.changeMdp2 = this.changeMdp2.bind(this);
    this.changeTel = this.changeTel.bind(this);
    this.changeAdr = this.changeAdr.bind(this);
    this.onReset = this.onReset.bind(this)
    this.toggleDanger = this.toggleDanger.bind(this);
    this.fileInputRef = React.createRef()
    this.handleFileSelect = this.handleFileSelect.bind(this);

    this._handleSave = this._handleSave.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleFileChange = this._handleFileChange.bind(this);
    this._setEditorRef = this._setEditorRef.bind(this);
    this._handleZoomSlider = this._handleZoomSlider.bind(this);
  }
  onReset() {
    this.setState({
      nom: '',
      pseudo: '',
      tel: '',
      mail: '',
      img: '',
      dateNaiss: '',
      adresse: '',
      ville: '',
      sexe: '',
      mdp: '',
      mdp2: '',
      sportFavoris: [],
    })
  }

  handleChange = info => {

    // console.log(info.file.type);
    // if (info.file.type !== 'image/jpeg' || info.file.type !== 'image/png') {
    //   message.error('Vous devez ajouter un fichier de format JPG/PNG.');
    // } else
    //   if (!info.file.size / 1024 / 1024 < 2) {
    //     message.error('La taille de la photo doit être inférieure à 2MB.');
    //   }
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true });
    //   // return;
    // } else
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            imageUrl,
            img: imageUrl,
            loading: false,
          }),
        );
      }
  };

  handleCancel = () => this.setState({ previewVisible: false })


  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }


  // onCropChange = (crop) => {
  //   this.setState({ crop })
  // }

  // onCropComplete = (croppedArea, croppedAreaPixels) => {
  //   console.log(croppedArea, croppedAreaPixels)
  // }

  // onZoomChange = (zoom) => {
  //   this.setState({ zoom })
  // }
  //Image Upload

  _handleZoomSlider(event, value) {
    let state = this.state;
    state.zoom = value;
    this.setState(state);
  }

  handleFileSelect = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]))
    var reader = new FileReader();
    reader.readAsDataURL((e.target.files[0]));
    const scope = this
    reader.onloadend = function () {
      var base64data = reader.result;
      scope.setState({
        croppedImg: base64data
      })
      console.log(base64data);
    }
  }
  _handleFileChange(e) {
    window.URL = window.URL || window.webkitURL;
    let url = window.URL.createObjectURL(e.target.files[0]);
    ReactDOM.findDOMNode(this.refs.in).value = "";
    let state = this.state;
    state.img = url;
    state.cropperOpen = true;
    this.setState(state);
  }
  _handleSave(e) {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      let state = this.state;
      state.img = null;
      state.cropperOpen = false;
      state.croppedImg = croppedImg;
      this.setState(state);
    }
  }
  _handleCancel() {
    let state = this.state;
    state.cropperOpen = false;
    this.setState(state);
  }
  _setEditorRef(editor) {
    this.editor = editor;
  }


  //Toggles

  toggle2() {
    this.setState({
      modal2: !this.state.modal2,
    });
  }

  toggle() {
    if (this.state.inscrit)
      this.props.history.push('/login')
    else {
      this.setState({
        modal: !this.state.modal
      });
    }
  }
  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
    console.log(this.state.danger)
  }
  componentDidMount() {
    const connected = localStorage.getItem('connected') === 'true';
    this.setState({ connected });
    /*if (localStorage.connected)
      this.props.history.goBack()

  */}
  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };




  changeDate(e) {
    this.setState({ dateNaiss: e.target.value });
  }


  changeSport(event, data) {

    // let myvalue = e.target.value;
    // let mytext = e.target.value;
    this.setState({ sportFavoris: data.value });

    // this.setState({ sportFavoris: [...this.state.sportFavoris , data.value] });
    console.log(this.state.sportFavoris);

  }


  changeSexe(e) {
    this.setState({ sexe: e.target.value });
  }


  changeNom(e) {

    this.setState({ nom: e.target.value });
  }

  changeMail(e) {
    this.setState({ mail: e.target.value });
  }

  changeMdp1(e) {
    this.setState({ mdp: e.target.value });
  }

  changeMdp2(e) {
    this.setState({ mdp2: e.target.value });
  }

  changeTel(e) {
    this.setState({ tel: e.target.value });
  }

  changeAdr(e) {
    this.setState({ adresse: e.target.value });
  }


  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.mdp2 || this.state.mdp !== this.state.mdp2) {
      this.setState({
        modal2: !this.state.modal2,
        message: 'Mot de passe 1 et 2 doivent être identiques.',
      });
      return;
    }
    if (this.state.mdp == this.state.mdp2) {
      axios
        .post(`${process.env.REACT_APP_API_URL}api/user/`, {
          nom: this.state.nom,
          nom: this.state.nom,
          pseudo: this.state.pseudo,
          tel: this.state.tel,
          email: this.state.mail,
          img: this.state.img,
          dateNaiss: this.state.dateNaiss,
          adresse: this.state.adresse,
          ville: this.state.ville,
          sexe: this.state.sexe,
          mdp: this.state.mdp,
          mdp2: this.state.nom,
          sportFavoris: this.state.sportFavoris,
        })
        .then((dd) => {
          alert("Bravo ! Vous êtes bien inscit.");
          window.location = "/login"
          // console.log(dd);
          // console.log("okkk")
          // this.setState({
          //   modal: !this.state.modal,
          //   message: "Bravo ! Vous êtes bien inscit. ",
          //   inscrit: true
          // })
          //this.props.history.push('/login');
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status);
            if (error.response.status === 401) {
              this.setState({
                modal: !this.state.modal,
                message: "Adresse email existe déjà!"
              })

            }

          }
        })

    }

  }


  render() {
    const { loading, imageUrl, previewVisible, previewImage } = this.state;
    const { formErrors } = this.state;
    const isValid = this.state;
    const message = this.state
    const uploadButton = (
      <div className="uploadbtn"  >
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Ajouter une photo de vous</div>


      </div>
    );
    return (

      <>
        <Modal
          isOpen={this.state.modal2}
          style={{ top: '20%' }}
          fade={false}
          toggle={this.toggle2}
        >
          <ModalBody>{this.state.message}</ModalBody>
          <ModalFooter>
            <Button
              class="danger"
              onClick={this.toggle2}
              style={{ backgroundColor: '#3633FF', color: 'white' }}
            >
              Ok
</Button>{' '}
          </ModalFooter>
        </Modal>
        

        <Container component="main" maxWidth="sm">

        <br></br><br></br><br></br><br></br>
        <div className="title">
        <Button
              href="/"
              startIcon={<FaArrowLeft className="back" />}
            >
            </Button>
          <h1>
            
            Créez votre compte SportShare.<br></br> Et rejoignez-nous !
        </h1>

        </div>
          <Header as='h2' icon textAlign='center'>


            <Grid className="smthg" item xs={12}>
              <ImgCrop rotate>
                <Upload
                  className="upload"
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                   action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  ref={this.fileInputRef}
                  // beforeUpload={beforeUpload}
                  onChange={this.handleChange}
                  onPreview={onPreview}
                  onCancel={this.handleCancel}
                  visible={previewVisible}

                >
                  {imageUrl ? <img src={imageUrl} className="avatar" alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  <style type="text/css">
                    {`
            
            .avatar {
                      
              border-radius : 50px ; }

              .upload{
                margin-top: 50px ;
                align : center ;
              }

              h1 {
                margin-bottom : 20px ;
                margin-top : 20px ;
                
                
                letter-spacing: 0em;
                color : #095b7c;
                font-weight: bold;
                
              }
              .title {
                display: flex;
                align-items: center;
               }
              .back {
                background-color: transparent ;
                color: #f97304;
              }

              .back:hover {
                background-color: transparent ;
                color: #f97304;
              }

              Container {
                margin-top : 1000px ;
              }

              .smthg {
                left: '50%'; 
                top: '50%';
                margin-bottom : 20px ;
              }
              
                      
            
                      `}
                  </style>
                </Upload>

              </ImgCrop>
            </Grid>
          </Header>

          <form action="" id="signupForm" method="post" onSubmit={this.onFormSubmit} >
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="nom" id="nom" onChange={this.changeNom}
                  value={this.state.nom}
                  label="Nom et prénom"
                  type="text"
                  required
                  validators={['matchRegexp:^[a-z A-Z]*$']}
                  // errorMessages={['Champ text.']}
                  variant="outlined"

                  fullWidth
                  autoComplete="nom"></TextField>

              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  name="pseudo" id="pseudo" onChange={this.onInputChange}
                  value={this.state.pseudo}
                  label="Pseudo"
                  type="text"
                  required
                  validators={['matchRegexp:^[a-z A-Z]*$']}
                  // errorMessages={['Champ text.']}
                  variant="outlined"

                  fullWidth
                  autoComplete="pseudo"
                />
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth

                  select
                  label="Sexe"
                  name="sexe"
                  options={options}
                  // value={sexe}
                  onChange={this.changeSexe}
                  variant="outlined"
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>


              <Grid item xs={12} sm={6}>
                <TextField
                  name="email" id="email" onChange={this.changeMail}
                  value={this.state.mail}
                  type="email"
                  label="Email"
                  // errorMessages={['Ce champ et obligatoire.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emailErreur}

              </div>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="motdepasse" id="motdepasse" onChange={this.changeMdp1}
                  value={this.state.mdp}
                  type="password"
                  label="Mot de passe"

                  validators={['minStringLength:6']}
                  // errorMessages={['Minimum 6 caractéres.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="motdepasse"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="motdepasse2" id="motdepasse2" onChange={this.changeMdp2}
                  value={this.state.mdp2}
                  label="Confirmation mot de passe"
                  type="password"
                  required
                  validators={['minStringLength:6']}
                  // errorMessages={['Minimum 6 caractéres.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="motdepasse2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="dateNaissance" id="dateNaissance" onChange={this.changeDate}
                  value={this.state.dateNaiss}

                  type="Date"
                  // errorMessages={['Ce champ et obligatoire.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="datenaiss"
                />

              </Grid>
              <Grid item xs={12} sm={6}>

                <TextField
                  name="telephone" id="telephone" onChange={this.changeTel}
                  value={this.state.tel}
                  type="text"
                  label="Téléphone"
                  validators={['required', 'matchRegexp:^[+0-9]*$']}
                  // errorMessages={['Ce champ et obligatoire.', 'Champ numérique.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="telephone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="adresse" id="adresse" title="adresse" onChange={this.changeAdr}
                  value={this.state.adresse}
                  type="text"
                  label="adresse"
                  // errorMessages={['Ce champ et obligatoire.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="adresse"
                />

              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="ville" id="ville" onChange={this.onInputChange}
                  value={this.state.ville}
                  type="text"
                  label="Ville"
                  // errorMessages={['Ce champ et obligatoire.']}
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="ville"
                />

              </Grid>



              <Grid item xs={12} >
                <Dropdown
                  fluid multiple selection
                  name="sportFavoris" id="sportFavoris" onChange={this.changeSport}
                  // value={this.state.sportFavoris}


                  options={sp}
                  // options={sp.map((option) => (
                  //     <MenuItem key={option.key} value={option.value}>
                  //         {option.text}
                  //     </MenuItem>
                  // ))}
                  placeholder="Sports préférés"
                  label="Sports préférés"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="sports"
                // errorMessages={['Ce champ et obligatoire.']}
                >



                </Dropdown>

              </Grid>


              <Grid item xs={12}>

                <Button type="submit" size="large"
                  className='btn--send' fullWidth>S'inscrire</Button>

                  <br></br><br></br><br></br><br></br>
                <style type="text/css">
                  {`

.btn--send {

background-color: transparent ;
margin-top: 20px;
border-radius: 5px;
color: #f97304;
font-weight: bold;
border: 2px solid #f97304;
}

.btn--send:hover {
color: white;
font-weight: bold;
background-color: #f97304;
border: 2px solid #f97304;
}


`}

                </style>




              </Grid>

            </Grid>

            <Modal isOpen={this.state.modal} class="modal" fade={false} toggle={this.toggle} >
              <div class="modalBody">
                <ModalBody>
                  {this.state.message}
                </ModalBody>
                <ModalFooter>
                  <Button class="danger" onClick={this.toggle} style={{ backgroundColor: '#3633FF', color: 'white' }}>Ok</Button>{' '}
                </ModalFooter>
              </div>

            </Modal>
          </form>
        </Container>

      </>
    );
  }
}

export default SignUp;