import React from 'react';
import axios from 'axios';
import { Calendar, Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import moment from 'moment';
import 'semantic-ui-css/semantic.min.css';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import {
  momentLocalizer,
} from 'react-big-calendar';
import Header from '../pages/Header' 
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);
const now = new Date();
var i = 0;
Date.prototype.addHours = function(h) {
  this.setHours(this.getHours() + h);
  return this;
};

class Calendarr extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('user'),
      displayDragItemInCell: true,
      events: [],
      message: '',
      titre: '',
      evtID: '',
      type: '',
      description: '',
      lieu: '',
      sport: '',
      dateDebut: null,
      dateFin: null,
      type: '',
      createur: '',
      modalEvt: false,
      modalDanger: false,
      modal3: false,
      errors: [],
      mesEvt: [],
      showS: false,
      showP: false,
      showCalendars: false,
      calendarsIds: [],
      selectedCalendarId: null,
      googleAccesToken: null,
    };

    this.moveEvent = this.moveEvent.bind(this);
    this.newEvent = this.newEvent.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggleEvt = this.toggleEvt.bind(this);
    this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleShowModalsCalendars = this.toggleShowModalsCalendars.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.syncCalendars = this.syncCalendars.bind(this);
    // this.handleChangeGoogleCalendar = this.handleChangeGoogleCalendar.bind(this);
  }
  handleChangeGoogleCalendar = (event) => {
    console.log('event', event);
    this.setState({ selectedCalendarId: event }, () => {
      console.log('calndar id', this.state.selectedCalendarId);
    });
  };
  toggleShowModalsCalendars() {
    this.setState({
      showCalendars: !this.state.showCalendars,
    });
  }
  componentDidMount() {
    // window.commonjs();
    // window.zoomimg();
    if(this.state.user==null)
        this.props.history.push("/404error")
        else
        {
    // TOFIX if not user id redirect to logout
    if (this.state.user.id) {
      this.setState({
        id: this.state.user.id,
      });
      window.gapi.signin2.render('google-signin-btn', {
        scope: 'https://www.googleapis.com/auth/calendar',
        theme: 'dark',
        onsuccess: this.onSignIn,
      });
     
    } else {
    }

    axios
      .get('api/evenements/mesevenements/' + this.state.user.id)
      .then((response) => {
        for (let j = 0; j < response.data.length; j++) {
          var e = {
            title: response.data[j].titre,
            start: moment(
              response.data[j].dateDebut,
              'YYYY-MM-DD HH:mm'
            ).toDate(),
            end: moment(response.data[j].dateFin, 'YYYY-MM-DD HH:mm').toDate(),
            allDay: false,
            isMine: true,
            id: response.data[j]._id,
            type: 'sportif',
          };
          this.state.mesEvt.push(e);
        }
        this.setState({
          events: this.state.mesEvt,
        });
      })

      .catch((error) => {
        console.log(error);
      });
    axios
      .get('http://localhost:5000/api/calendrierEvt/mesEvts/' + this.state.user)
      .then((response) => {
        for (let j = 0; j < response.data.length; j++) {
          var e = {
            title: response.data[j].titre,
            start: moment(
              response.data[j].dateDebut,
              'YYYY-MM-DD HH:mm'
            ).toDate(),
            end: moment(response.data[j].dateFin, 'YYYY-MM-DD HH:mm').toDate(),
            allDay: false,
            isMine: true,
            id: response.data[j]._id,
            type: 'privé',
          };
          this.state.mesEvt.push(e);
        }
        this.setState({
          events: this.state.mesEvt,
        });
      })

      .catch((error) => {
        console.log(error);
      });
    }
  }
  showEvtSport = () => {
    this.setState({
      showS: true,
      showP: false,
    });
  };
  showEvts = () => {
    this.setState({
      showS: false,
      showP: false,
    });
  };
  showEvtPrive = () => {
    this.setState({
      showP: true,
      showS: false,
    });
  };
  handleDragStart = (event) => {
    this.setState({ draggedEvent: event });
  };

  dragFromOutsideItem = () => {
    return this.state.draggedEvent;
  };
  toggleDanger = (event) => {
    console.log(event);
    this.setState({
      modalDanger: !this.state.modalDanger,
      modal2: false,
    });
  };
  toggleEvt = (event) => {
    this.setState({
      modalEvt: !this.state.modalEvt,
      dateDebut: new Date(event.start).addHours(1),
      dateFin: new Date(event.end).addHours(1),
    });
  };

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state;

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    };

    this.setState({ draggedEvent: null });
    this.moveEvent({ event, start, end });
  };

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state;

    let allDay = event.allDay;

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  };

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents,
    });

    //alert(`${event.title} was resized to ${start}-${end}`)
  };
  handleRemoveSpecificRow() {
    const events = [...this.state.events];

    events.splice(this.state.evtID, 1);
    this.setState({ events });
    if (this.state.type === 'sportif') {
      axios
        .delete('http://localhost:5000/api/calendrierEvt/supprimer/' + this.state.evtID)
        .then((response) => {
          this.setState({
            modalDanger: !this.state.modalDanger,
            modal3: !this.state.modal3,
            message: 'Evenement supprimé avec succès.',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .delete('http://localhost:5000/api/calendrierEvt/supprimer/' + this.state.evtID)
        .then((response) => {
          this.setState({
            modalDanger: !this.state.modalDanger,
            modal3: !this.state.modal3,
            message: 'Evenement supprimé avec succès.',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  onSubmit = (event) => {
    {
      let er = [];
      if (this.state.titre != '' && this.state.type != null) {
        this.setState({ error: false });
      }

      if (this.state.titre === '') {
        er.push(' Titre');
        this.setState({ error: true, errors: er });
      }

      if (this.state.type === '') {
        er.push(' Type');
        this.setState({ error: true, errors: er });
      }
      if (
        this.state.type !== '' &&
        this.state.description !== '' &&
        this.state.titre !== ''
      ) {
        axios
          .post('http://localhost:5000/api/calendrierEvt/ajouter', {
            titre: this.state.titre,
            description: this.state.description,
            lieu: this.state.lieu,
            type: this.state.type,
            createur: this.state.user,
            dateDebut: this.state.dateDebut,
            dateFin: this.state.dateFin,
          })
          .then(() => {
            var e = {
              title: this.state.titre,
              start: moment(
                this.state.dateDebut.addHours(-1),
                'YYYY-MM-DD HH:mm'
              ).toDate(),
              end: moment(
                this.state.dateFin.addHours(-1),
                'YYYY-MM-DD HH:mm'
              ).toDate(),
              allDay: false,
              isMine: true,
              type: this.state.type,
              id: this.state.events.length + 1,
            };
            this.state.events.push(e);
            console.log('okkk');
            this.setState({
              modal3: !this.state.modal3,
              message: 'Evenement ajouté avec succès',
              modalEvt: !this.state.modalEvt,
              titre: '',
              description: '',
              type: '',
              createur: '',
            });
          })
          .catch((error) => {
            if (error.response.status && error.response.status == 401) {
              console.log(error);
            }
          });
      }
    }
  };
  onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    const profile = googleUser.getBasicProfile();
    // The ID token you need to pass to your backend:
    const id_token = googleUser.getAuthResponse().id_token;
    const accessToken = googleUser.getAuthResponse().access_token;
    const token_type = googleUser.getAuthResponse().token_type;
    localStorage.setItem('google_token', id_token);
    const self = this;
    this.setState({ googleAccesToken: token_type + ' ' + accessToken });
    axios
      .get('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Authorization: token_type + ' ' + accessToken,
        },
      })
      .then((calendars) => {
        self.toggleShowModalsCalendars();
        console.log('calendars', calendars);
        self.setState({ calendarsIds: calendars.data.items });
      });
  }
  newEvent(event) {

  }
  syncCalendars() {
    if (this.state.selectedCalendarId) {
      this.toggleShowModalsCalendars();
      window.gapi.client.load('calendar', 'v3', () => {
        console.log('in loading api');
        const self = this;
        this.state.mesEvt.map((event) => {
          axios
            .post(
              `https://www.googleapis.com/calendar/v3/calendars/${self.state.selectedCalendarId}/events`,
              {
                summary: event.title,
                start: {
                  dateTime: moment(event.start).toDate(),
                  timeZone: 'Africa/Tunis',
                },
                end: {
                  dateTime: moment(event.end).toDate(),
                  timeZone: 'Africa/Tunis',
                },
              },
              {
                headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  Authorization: this.state.googleAccesToken,
                },
              }
            )
            .then((response) => {
              console.log('resopnse', response);
            })
            .catch((err) => {
              console.log('error', err);
            });
        });
        axios
          .get(
            `https://www.googleapis.com/calendar/v3/calendars/${self.state.selectedCalendarId}/events`,
            {
              headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: this.state.googleAccesToken,
              },
            }
          )
          .then((response) => {
            console.log(
              'response from fetching event from google calendar',
              response
            );
            response.data.items.map((event, i) => {
              const e = {
                title: event.summary,
                start: moment(
                  event.start.date,
                  'YYYY-MM-DD HH:mm'
                ).toDate(),
                end: moment(event.end.date, 'YYYY-MM-DD HH:mm').toDate(),
                allDay: false,
                isMine: true,
                id: null,
                type: 'sportif',
              };
              this.state.mesEvt.push(e);
            })
          })
          .catch((err) => {
            console.log('Error: ', err);
          });
      });
    }
  }
  onInputChange = (e) => {
    let inputValue = e.target.value;
    this.setState({ [e.target.name]: inputValue });
    console.log(this.state);
  };
  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      });
  };
  toggle2(e) {
    console.log(e);
    if (e.description != undefined) {
      this.setState({
        description: e.description,
      });
    } else {
      this.setState({
        description: 'Pas de description.',
      });
    }

    this.setState({
      modal2: !this.state.modal2,
      titre: e.title,
      evtID: e.id,
      type: e.type,
    });
  }
  toggle3() {
    this.setState({
      modal3: !this.state.modal3,
    });
    window.location.reload(false);
  }
  render() {
    return (
      <>
        <Header/>
        <div style={{marginTop:"90px",marginLeft:"10px"}}>
        <Modal 
          isOpen={this.state.modalDanger}
          fade={false}
          toggle={this.toggleDanger}
        >
          <ModalBody>êtes-vous sûr ?</ModalBody>
          <ModalFooter>
            <Button
              class="danger"
              onClick={this.handleRemoveSpecificRow}
              style={{ backgroundColor: '#de1e1e', color: 'white' }}
            >
              Oui
            </Button>{' '}
            <Button
              type="button"
              onClick={this.toggleDanger}
              style={{ backgroundColor: '#3633FF', color: 'white' }}
            >
              Annuler
            </Button>{' '}
          </ModalFooter>
        </Modal>
        {/* select calendar modal */}
        <Modal
          isOpen={this.state.showCalendars}
          fade={false}
          toggle={this.toggleShowModalsCalendars}
        >
          <ModalHeader>
            <span className="modalTitle">Choisir calendrier</span>
          </ModalHeader>
          <ModalBody>
            <div>
              {this.state.calendarsIds.map((calendar, i) => {
                return (
                  <div key={calendar.id}>
                    <input
                      checked={this.state.selectedCalendarId === calendar.id}
                      onChange={this.handleChangeGoogleCalendar.bind(
                        this,
                        calendar.id
                      )}
                      type="radio"
                      name={calendar.id}
                      value={calendar.id}
                      key={calendar.id}
                    />
                    <label for={calendar.id}>{calendar.summary}</label>
                    <br />
                  </div>
                );
              })}
              {/* <input type="radio" id="female" name="gender" value="female" />
              <label for="female">Female</label>
              <br />
              <input type="radio" id="other" name="gender" value="other" />
              <label for="other">Other</label> */}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.syncCalendars}
              style={{ backgroundColor: '#3633FF', color: 'white' }}
            >
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal3}
          style={{ top: '5%' }}
          fade={false}
          toggle={this.toggle3}
        >
          <ModalBody>{this.state.message}</ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.toggle3}
              style={{ backgroundColor: '#1752b5', color: 'white' }}
              disabled={!this.state.selectedCalendarId}
            >
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal2}
          style={{ top: '5%' }}
          fade={false}
          toggle={this.toggle2}
        >
          <ModalHeader>
            <span className="modalTitle">{this.state.titre}</span>
          </ModalHeader>
          <ModalBody>
            <span className="modalTitle">Type: </span> {this.state.type} <br />
            <span className="modalTitle">Description: </span>
            {this.state.description}
            <br />
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.toggleDanger}
              style={{ backgroundColor: '#de1e1e', color: 'white' }}
            >
              Supprimer
            </Button>{' '}
            <Button
              class="danger"
              onClick={this.toggle2}
              style={{ backgroundColor: '#3633FF', color: 'white' }}
            >
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={this.state.modalEvt}
          class=""
          fade={false}
          toggle={this.toggleEvt}
          style={{
            'margin-left': '218px',
            'margin-top': '180px',
            width: '67%',
            top: '-15%',
          }}
        >
          <ModalHeader>Ajouter un événement</ModalHeader>
          <div class="modalBody">
             <div>
                <fieldset class="group-select">
                  <ul>
                    <li id="billing-new-address-form">
                      <fieldset class="">
                        <ul>
                          <li>
                            <label for="nom">
                              <em class="required">*</em> Titre
                            </label>
                            <br />
                            <input
                              name="titre"
                              id="titre"
                              title="Titre"
                              onChange={this.onInputChange}
                              value={this.state.titre}
                              type="text"
                              width={15}
                              style={{ width: '103.5%' }}
                            />
                          </li>

                          <li>
                            <label for="description">Description</label>
                            <br />
                            <textarea
                              name="description"
                              id="description"
                              title="description"
                              onChange={this.onInputChange}
                              value={this.state.description}
                              rows="2"
                              style={{ width: '97%' }}
                            />
                          </li>

                          <br />
                          <li>
                            <div class="customer-name">
                              <div class="input-box name-firstname">
                                <label for="type">
                                  <em class="required">*</em> Type
                                </label>
                                <br />
                                <select
                                  class="ui  dropdown"
                                  name="type"
                                  id="type"
                                  onChange={this.onInputChange}
                                  value={this.state.type}
                                  style={{ width: '94%', 'margin-top': '4px' }}
                                >
                                  <option key="">Choisir</option>
                                  <option key="sportif">Sportif</option>
                                  <option key="privé">Privé</option>
                                </select>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </fieldset>
                    </li>
                  </ul>
                </fieldset>
                <Collapse
                  in={this.state.error}
                  style={{ marginBottom: '22px', marginTop: '-30px' }}
                >
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          this.setState({ error: false });
                        }}
                      ></IconButton>
                    }
                  >
                    <h4> Veuillez remplir tous les champs obligatoires: </h4>
                    {this.state.errors.map((item) => (
                      <li key={item} style={{ fontSize: '13px' }}>
                        {item}
                      </li>
                    ))}
                  </Alert>
                </Collapse>
                <Button
                  type="button"
                  onClick={this.toggleEvt}
                  style={{
                    backgroundColor: 'rgba(177, 8, 8, 0.87)',
                    color: 'white',
                  }}
                >
                  Annuler
                </Button>{' '}
                <Button
                  class="succes"
                  onClick={this.onSubmit.bind(this)}
                  style={{
                    backgroundColor: 'rgb(62, 181, 7,0.87)',
                    color: 'white',
                  }}
                >
                  Ajouter
                </Button>{' '}
              
           
            </div>
            
          </div>
        </Modal>

        <aside
          style={{
            display: 'flex',
          }}
        >
          <div
            className="side-nav-categories"
            style={{
              height: '310px',
              margin: '30px 30px 30px',
              width: '268px',
            }}
          >
          </div>
          <div>
            <span class="mb-1">
              Connecter avec votre compte google pour synchroniser vos
              evenements:
            </span>
            <div id="google-signin-btn" data-onsuccess="onSignIn"></div>
            <DragAndDropCalendar
              backend={HTML5Backend}
              style={{
                height: '370pt',
                width: '950px',
                margin: 'auto',
                marginTop: '30px',
              }}
              selectable
              localizer={localizer}
              events={this.state.events}
              onEventDrop={this.moveEvent}
              onSelectEvent={(event) => this.toggle2(event)}
              resizable
              onEventResize={this.resizeEvent}
              onSelectSlot={(event) => this.toggleEvt(event)}
              defaultView={Views.MONTH}
              defaultDate={moment().toDate()}
              dragFromOutsideItem={
                this.state.displayDragItemInCell
                  ? this.dragFromOutsideItem
                  : null
              }
              timeslots={1}
              onScroll={this.handleDragStart}
              onDropFromOutside={this.onDropFromOutside}
              handleDragStart={this.handleDragStart}
              eventPropGetter={(event, start, end, isSelected) => {
                let newStyle = {
                  backgroundColor: '#6ca3ef',
                  color: 'black',
                  borderRadius: '0px',
                  border: 'none',
                  visibility: '',
                };

                if (event.type == 'privé' && this.state.showS) {
                  newStyle.visibility = 'hidden';
                }
                if (event.type == 'sportif' && this.state.showP) {
                  newStyle.visibility = 'hidden';
                }

                if (event.type == 'privé') {
                  newStyle.color = 'white';
                  newStyle.backgroundColor = '#d614d4';
                }

                return {
                  className: '',
                  style: newStyle,
                };
              }}
            />
          </div>
        </aside>
       </div>
      </>
    );
  }
}

export default Calendarr;
