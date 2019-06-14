import React from 'react';

const Task = (props) => {
    const taskStyle = {
        color: "red",
        textTransform: "uppercase"
    }
    const { text, date, id, active, important, finishDate } = props.task

    if (active) {
        return (
            <>
                <p style={important ? taskStyle : null}>{text} do {date}
                    <button onClick={() => props.change(id)}>Zrobione</button>
                    <button onClick={() => props.delete(id)}>X</button>
                </p>
            </>
        )
    }

    else {
        const finish = new Date(finishDate).toLocaleString()
        return (
            <>
                <p>{text} do {date} wykonano {finish}  <button onClick={() => props.delete(id)}>X</button></p>


            </>
        )
    };
}

export default Task