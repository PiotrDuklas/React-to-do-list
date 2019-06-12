import React, { Component } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "wypić piwo",
        date: "2019-06-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "kupić sok",
        date: "2019-06-20",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  }

  deleteTask = (id) => { console.log("usuwam" + id) }
  changeTaskStatus = (id) => { console.log("zrobione" + id) }

  render() {
    return (
      <>
        <div>Tutaj coś</div>
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </>
    );
  }
}

export default App;
