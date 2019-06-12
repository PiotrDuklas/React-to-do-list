import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    return (
        <>
            <h1>{tasks}</h1>

        </>
    );
}

export default TaskList;