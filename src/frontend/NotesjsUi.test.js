import React from 'react';
import ReactDOM from 'react-dom';
import NotesjsUi from './NotesjsUi.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotesjsUi />, div);
});
