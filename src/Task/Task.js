import React, { Component } from 'react';

function Task (props){
    return (
        <div className="task">
            <p>{props.text}</p>
            <button>Delete</button>
        </div>
    );
}
export default Task;
