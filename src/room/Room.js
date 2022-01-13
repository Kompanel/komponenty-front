import PropTypes from "prop-types"

const Room = (props) => {

    return (
        <div class="layout padding">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Sala {props.num}</h5>
                    <p>Pojemnosc: {props.capacity}</p>
                </div>
            </div> 
        </div>
    )
}

Room.propTypes = {
    num: (props) =>{
        PropTypes.number.isRequired
        if (props.num <= 0) {
            return new Error("Numer sali musi być dodatni")
        }
    },
    capacity: (props) => {
        PropTypes.number.isRequired
        if (props.capacity <= 0) {
            return new Error("Sala musi posiadać dodatnią liczbę miejsc")
        }
    }
}

export default Room