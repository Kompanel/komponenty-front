import React from "react";
import { Redirect } from "react-router";
import "../style.css"


class AddMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            duration: '',
            redirect: false
        }
    }

    addMovie = () => {
        let alert = document.getElementById("alertBox");
        if (this.state.title === '' || this.state.duration === '') {
            alert.style.visibility = "visible";
            alert.textContent = "Formularz nie zostal wypelniony w calosci";
        }
        else if (this.state.duration <= 0) {
            alert.style.visibility = "visible";
            alert.textContent = "Czas trwania musi byc liczba dodatnia";
        }
        else {
            let func = this.props.addMovie
            func({
                title: this.state.title,
                duration: parseInt(this.state.duration)
            })

            this.setState({ redirect: true })
        }
    }

    titleOnChange = (event) => {
        let value = event.target.value
        this.setState({
            title: value
        })
    }
    durationOnChange = (event) => {
        let value = event.target.value
        this.setState({
            duration: value
        })
    }


    render() {

        if (this.state.redirect) {

            return <Redirect to="/movie" />
        }

        return (
            <div>
                <div class="formLayout">
                    <div>
                        <label class="form-label">Tytul filmu</label>
                        <input type="text" class="form-control" value={this.state.title} onChange={this.titleOnChange}></input>
                    </div>

                    <div class="paddingTop">
                        <label class="form-label">Dlugosc trwania</label>
                        <input type="number" class="form-control" value={this.state.duration} onChange={this.durationOnChange}></input>
                    </div>

                    <div class="paddingTop center">
                        <button class="btn btn-primary" onClick={this.addMovie}>Dodaj</button>
                    </div>
                </div>
                <div id="alertBox" class="alert alert-danger" role="alert">
                    Wprowadź poprawne dane!
                </div>
            </div>

        )
    }
}

export default AddMovie