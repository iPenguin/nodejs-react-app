import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotesjsUi from './frontend/NotesjsUi.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NotesjsUi />, document.getElementById('root'));
registerServiceWorker();
