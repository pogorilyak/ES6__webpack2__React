import React from 'react';

export const Task = (props) => {
    const {title, priority, description, time, date, id} = props.options;
  return (
      <div className="task-item" id={id} data-priority={priority}>
          <header className="task-header">
              <h2 className="task-title">{title}</h2>
              <ul className="actions-list">
                  <li className="action-item">edit</li>
                  <li className="action-item">delete</li>
              </ul>
          </header>
          <p className="task-description">{description}</p>
          <footer className="task-footer">
              <span className="task-time">{time}</span>
              <span className="task-date">{date}</span>
          </footer>
      </div>
  );
};
