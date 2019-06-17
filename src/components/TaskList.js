import React from 'react';
import Task from './Task'

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);
    done.sort((a, b) => b.finishDate - a.finishDate);
    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

    done.sort()

    return (
        <>
            <h1>Zadania do wykonania</h1>
            <h3>{activeTasks}</h3>
            <hr />
            <h2>Zadania wykonane</h2>
            {done.length > 3 && <span>3 ostatnio wykonane zadania</span>}
            <h3>{doneTasks.slice(0, 3)}</h3>

        </>
    );
}

export default TaskList;