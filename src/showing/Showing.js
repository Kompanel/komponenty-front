import React from "react";
import "../style.css"

class Showing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: props.date,
            movie: props.movie,
            room: props.room,
            takenSeats: props.takenSeats
        }
    }

    render() {
        return (
            <div class="layout padding">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{this.state.movie.title}</h5>
                        <h6 class="card-title">{this.state.date.substr(0, this.state.date.indexOf('T'))}</h6>
                        <p class="center">Sala: {this.state.room.number}</p>
                        <p class="center">Godzina: {this.state.date.substr(this.state.date.indexOf('T') + 1, this.state.date.length)}</p>
                        <p class="center">Pozostałych miejsc: {parseInt(this.state.room.capacity) - this.state.takenSeats.length }</p>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Showing