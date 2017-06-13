const css = require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import {CurrentTaskView} from './CurrentTasks';

ReactDOM.render(
    <CurrentTaskView/>,
    document.getElementById('dragContainer')
);