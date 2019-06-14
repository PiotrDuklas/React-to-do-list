import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: "",
        checked: false
    }
    render() {
        return (
            <>
                <input type="text" value={this.state.text} placeholder="wpisz coś" />
                <label htmlFor=""> Priorytet </label>
                <input type="checkbox" name="priorytet" id="" checked={this.state.checked} />
                <label htmlFor="">Deadline: </label>
                <input type="date" name="" id="" min="2019-06-14" max="2019-12-31" />
                <button>Dodaj zadanie do listy</button>
                <hr />
            </>
        );
    }
}

export default AddTask;