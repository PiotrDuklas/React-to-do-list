import React from 'react';

const Task = (props) => {
    const { text, date, id } = props.task
    return (
        <>
            <p>{text} do {date}
                <button onClick={() => props.delete(id)}>Usuń</button>
                <button onClick={() => props.change(id)}>X</button>
            </p>
        </>
    );
}

export default Task;