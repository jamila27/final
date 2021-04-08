import React from 'react'

import { Calendar, Views } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { HTML5Backend } from "react-dnd-html5-backend";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import moment from "moment";
import {

    DateLocalizer,
    momentLocalizer,
    globalizeLocalizer,
    Navigate,
    components,
  } from 'react-big-calendar'
const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar)
const now = new Date();
const events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: now,
      end: now,
      isMine: true
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2020, 6, 19),
      end: new Date(2020, 6, 20),
    },
    {
      id: 2,
      title: 'Right now Time Event',
      start: now,
      end: now,
    },
  ]
class Calendarr extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: events,
      displayDragItemInCell: true,
      message:""
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
    this.toggle2 = this.toggle2.bind(this)
  }

  handleDragStart = event => {
    this.setState({ draggedEvent: event })
  }

  dragFromOutsideItem = () => {
    return this.state.draggedEvent
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }

    this.setState({ draggedEvent: null })
    this.moveEvent({ event, start, end })
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }
  toggle2(e) {
    this.setState({
      modal2: !this.state.modal2,
      message: e
    });
  }
  render() {
    return (
        <>
        <Header/>
        <Modal isOpen={this.state.modal2} style={{ top: '5%' }} fade={false} toggle={this.toggle2} >
        <ModalHeader>
          Titre
                 </ModalHeader>
        <ModalBody>
          {this.state.message}
        </ModalBody>
        <ModalFooter>
          <Button class="danger" onClick={() => this.toggle2()} style={{ backgroundColor: '#3633FF', color: 'white' }}>Ok</Button>{' '}

        </ModalFooter>
      </Modal>
      <div style={{textAlign:"center"}}>
      <DragAndDropCalendar
      backend={HTML5Backend} style={{ height: '500pt', width: "950px", margin: "auto", marginTop: "30px" }}
            
        selectable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        onSelectEvent={event => this.toggle2(event.title)}
        onSelectSlot={this.handleSelect}
        resizable
        onEventResize={this.resizeEvent}
        onSelectSlot={this.newEvent}
        onDragStart={console.log}
        defaultView={Views.MONTH}
        defaultDate={moment().toDate()}
        popup={true}
        dragFromOutsideItem={
          this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
        }
        onDropFromOutside={this.onDropFromOutside}
        handleDragStart={this.handleDragStart}
        eventPropGetter={
            (event, start, end, isSelected) => {
              let newStyle = {
                backgroundColor: "#6ca3ef",
                color: 'black',
                borderRadius: "0px",
                border: "none"
              };

              if (event.isMine) {
                newStyle.color = "white"
                newStyle.backgroundColor = "#d614d4"
              }

              return {
                className: "",
                style: newStyle
              };
            }
          }
      />
      </div>
      </>
    )
  }
}

export default Calendarr