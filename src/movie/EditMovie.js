import React from "react";
import { Redirect } from "react-router";
import "../style.css"
import * as Api from "../api"

class EditMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            baseTitle: props.movie.title,
            title: props.movie.title,
            duration: props.movie.duration,
            redirect: false,
            list: []
        }

        this.editMovie = this.editMovie.bind(this)
    }

    componentDidMount() {
        Api.getAllShowing()
            .then(response => this.setState(state => {
                let list = response.data
                return {list: list}
            }))
            .catch(error => console.log(error))
    }

    editMovie = () => {
        let alert = document.getElementById("alertBox")
        if (this.state.title === '' || this.state.duration === '') {
            alert.style.visibility = "visible";
            alert.textContent = "Formularz nie zostal wypelniony w calosci";
        }
        else if (this.state.duration <= 0) {
            alert.style.visibility = "visible";
            alert.textContent = "Czas trwania musi byc liczba dodatnia";
        }
        else {
            let func = this.props.editMovie
            func({
                title: this.state.title,
                duration: this.state.duration
            }, parseInt(this.props.index))

            this.state.list.forEach(e => {
                if (e.movie.title === this.state.baseTitle) {
                    let index = this.state.list.indexOf(e)
                    let showing = e
                    showing.movie.title = this.state.title
                    showing.movie.duration = this.state.duration
                    Api.editShowing(showing, index)
                }
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
                        <button class="btn btn-primary" onClick={this.editMovie}>Edytuj</button>
                    </div>
                </div>
                <div id="alertBox" class="alert alert-danger" role="alert">
                    Wprowadź poprawne dane!
                </div>
            </div>

        )
    }
}

export default EditMovie