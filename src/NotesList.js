import React, { Component } from 'react';
import './NotesList.css';

class NotesList extends Component {
  render() {
    return (
      <div className="NotesList-list">
        <ul>
          <li>Note #1</li>
          <li>Note #2</li>
        </ul>
      </div>
    );
  }
}

export default NotesList;
