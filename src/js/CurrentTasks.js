import React from 'react';
import {Task} from './Task';
import tasks from './_tmp/tasks.json';

export const CurrentTaskView = () => {
    return (
        <div className="task-list-wrap">
            <div className="list-title--wrap">
                <h2 className="list-title">Current Task</h2>
            </div>
            <ul className="task-list" id="noteContainer">
                {
                    tasks.map((options,idx) => {
                        return <Task key={idx}  options={options}/>
                    })
                }
            </ul>
        </div>
    );
};