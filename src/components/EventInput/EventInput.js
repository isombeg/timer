import React from 'react';
import './EventInput.css';

class EventInput extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            eventName: '',
            eventDate: '',
            eventTime: '00:00'
        }
        
        this.formErrorMessage = (<div></div>)
        this.currentDate = new Date()
        this.currentDateStr = `${this.currentDate.getFullYear()}-${this.currentDate.getMonth() + 1}-${this.currentDate.getDate()}`
    }

    onEventNameChange = (event) => {
        this.setState({eventName: event.target.value})
    }

    onEventDateChange = (event) => {
        this.setState({eventDate: event.target.value})
        this.compareInputToCurrDate()
    }

    onEventTimeChange = (event) => {
        this.setState({eventTime: event.target.value})
        this.compareInputToCurrDate()
    }

    compareInputToCurrDate = () => {
        const {eventDate, eventTime} = this.state
        const inputDate = new Date(`${eventDate}${eventTime === null ? "" : `T${eventTime}`}`)

        if(inputDate < new Date()){
            this.errorMessage = (
                <p textcolor="red">Event occurs in the past. Please change time</p>
            )
        }
    }
 
    handleSubmit = (event) => {
        return true
    
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="eventNameInput">Event name: </label>
                <input type="text" id="eventNameInput" name="eventNameInput" onChange={this.onEventNameChange} required /><br />
                <label htmlFor="eventDateInput">Event date: </label>
                <input type="date" id="eventDateInput" name="eventDateInput" onChange={this.onEventDateChange} min={this.currentDateStr} required /><br />
                <label htmlFor="eventTimeInput">Event time: </label>
                <input type="time" id="eventTimeInput" name="eventTimeInput" onChange={this.onEventTimeChange} value="00:00"/><br />
                <input type="submit" value="Start" />
                {this.errorMessage}
            </form>
        )
        
    }
}

export default EventInput;