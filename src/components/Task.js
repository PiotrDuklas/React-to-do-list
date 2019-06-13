import React from 'react';

const Task = (props) => {
    const { text, date, id } = props.task
    return (
        <>
            <p>{text} do {date}
                <button onClick={() => props.change(id)}>Zrobione</button>
                <button onClick={() => props.delete(id)}>X</button>
            </p>
        </>
    );
}

export default Task;