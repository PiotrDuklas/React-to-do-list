import React, { Component } from 'react';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0, 10);

    state = {
        text: "",
        checked: false,
        date: this.minDate
    }

    handleDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleCheckbox = (e) => {
        this.setState({
            checked: e.target.checked
        })
    }

    handleClick = () => {
        const { text, checked, date } = this.state;
        if (text.length > 3) {
            const add = this.props.add(text, date, checked);
            if (add) {
                this.setState({
                    text: "",
                    checked: false,
                    date: this.minDate
                })
            }
        } else {
            alert("ups, zepsuło się")
        }
    }
    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 1;
        maxDate = maxDate + "-12-31"
        return (
            <>
                <input type="text" placeholder="wpisz coś" value={this.state.text} onChange={this.handleText} />
                <input type="checkbox" checked={this.state.checked} id="important" onChange={this.handleCheckbox} />
                <label htmlFor="important"> Priorytet </label>
                <label htmlFor="date">Deadline: </label>
                <input type="date" value={this.state.date} min={this.minDate} max={maxDate} onChange={this.handleDate} />
                <button onClick={this.handleClick}>Dodaj zadanie do listy</button>
                <hr />
            </>
        );
    }
}

export default AddTask;
