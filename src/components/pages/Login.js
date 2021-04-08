import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import stringify from 'json-stringify-safe';
 import { Modal, ModalBody, ModalFooter } from 'reactstrap';
// import Modal from 'react-bootstrap/Modal'
import { FaArrowLeft } from "react-icons/fa"
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../../reducers";


// const handleLogin = async googleData => {
//     const res = await fetch("/api/v1/auth/google", {
//         method: "POST",
//         body: JSON.stringify({
//             token: googleData.tokenId
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     const data = await res.json()
//     // store returned user somehow
// }

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            modal1: false,
            modal2: false,
            message: '',
            email: '',
            mdp: '',
            user: {
                id: '',
                nomprenom: '',
                pseudo: '',
                tel: '',
                email: '',
                mdp: '',
                img: '',
                dateNaiss: '',
                adress: '',
                ville: '',
                sexe: '',
                sports: [],
            },
            connected: false,
            user2: false,
        }


        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.changeMail = this.changeMail.bind(this);
        this.changeMdp = this.changeMdp.bind(this);

    }


    changeMail(e) {
        this.setState({ email: e.target.value });
    }

    changeMdp(e) {
        this.setState({ mdp: e.target.value });
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    toggle2() {
        this.setState({
            modal2: !this.state.modal2
        });
    }
    toggle1() {
        this.setState({
            modal1: !this.state.modal1
        });
    }

    onInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    };


    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email: this.state.email,
                mdp: this.state.mdp
            },

        })
            .then((res) => {
                if (res.data.errors) {
                } else {
                    console.log("lomm")
                    localStorage.setItem('connected', this.state.connected);
                    localStorage.setItem('user', res.data.userA);
                    // this.store = createStore(
                    //     rootReducer,
                    //     composeWithDevTools(applyMiddleware(thunk))
                    //   );
                    window.location = "/home";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }



    render() {
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


                <Container component="main" maxWidth="xs" style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    size: '100%',
                }}>




                    <h1>
                        <Button
                        
                            
                            href="/"
                            startIcon={<FaArrowLeft className="back"  />}
                        >
                        </Button>
                        Bienvenue à SportShare
                    </h1>



                    <form action="" id="loginForm" method="post" onSubmit={this.onFormSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            onChange={this.changeMail}
                            value={this.state.email}
                            type="email"
                            validators={['required']}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.changeMdp}
                            value={this.state.mdp}
                            type="password"
                            validators={['required']}
                        />
                        <Grid className="grid1" item xs>
                            
                            <Link style={{color:"#095b7c"}} className="insci" href="/" variant="body2">
                            Mot de passe oublié ? Récupérer mon mot de passe
                            </Link>
                        </Grid>
                        <Button type="submit" size="large"
                            className='btn--send' fullWidth>Se connecter</Button>


                        <style type="text/css">
                            {`


                            h1 {
                                margin-bottom : 20px ;
                                
                                letter-spacing: 0em;
                                color : #095b7c;
                                font-weight: bold;
                                
                              }

                              .back {
                                background-color: transparent ;
                                color: #f97304;
                              }

                              .back:hover {
                                background-color: transparent ;
                                color: #f97304;
                              }

.btn--send {

    background-color: transparent ;
    margin-top: 50px;
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
                        <Grid container>

                            <Grid container>
                                <Grid className="grid2" item xs>
                                    
                                    <Link style={{color:"#095b7c"}} className="insci" href="/registersync" variant="body2">
                                    Nouveau sur SportShare ? Nous joindre
                                    </Link>

                                    <style type="text/css">
                                        {`

                                        
.insci  {
    color : #095b7c;

  }

  Link {
    color : #095b7c;
  }

  .grid1 {
      margin-left : 100px;
      color : #095b7c;

  }

  .grid2 {
    margin-left : 170px;
    margin-top : 5px;
    color : #095b7c;
    
  }

  span {
    margin-right : 10px;

    
    
  }
  Container {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}

          `}
                                    </style>

                                </Grid>


                            </Grid>
                        </Grid>
                    </form>






                    <Modal isOpen={this.state.modal} style={{ top: '20%' }} fade={false} toggle={this.toggle} >
                        <ModalBody>
                            {this.state.message}
                        </ModalBody>
                        <ModalFooter>
                            <Button class="danger" onClick={this.toggle} style={{ backgroundColor: '#3633FF', color: 'white' }}>Ok</Button>{' '}
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.modal2} style={{ top: '20%' }} fade={false} toggle={this.toggle2} >
                        <ModalBody>
                            Un lien a été envoyé par email pour changer votre mot de passe.
                        </ModalBody>
                        <ModalFooter>
                            <Button class="danger" onClick={this.toggle2} style={{ backgroundColor: '#3633FF', color: 'white' }}>Ok</Button>{' '}
                        </ModalFooter>
                    </Modal>
                    <Modal isOpen={this.state.modal1} style={{ top: '20%' }} fade={false} toggle={this.toggle1} >
                        <ModalBody>
                            <form   >
                                <div class="content">
                                    <p>Récupérer le mot de passe avec votre adresse email.</p>
                                    <ul class="form-list">
                                        <li>
                                            <label htmlFor="email">Email<em class="required">*</em></label>
                                            <div class="input-box">
                                                <input
                                                    name="email" id="email" title="Email" onChange={this.onInputChange}
                                                    value={this.state.email}
                                                    type="email"
                                                    validators={['required']}
                                                    // errorMessages={['Ce champ et obligatoire.']}
                                                    width={15}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </form>

                        </ModalBody>
                        <ModalFooter>

                            <Button class="danger" onClick={this.toggle1} style={{ backgroundColor: '#3633FF', color: 'white' }}>Annuler</Button>
                        </ModalFooter>
                    </Modal>





                </Container>



            </>

        );
    }
}
export default Login;