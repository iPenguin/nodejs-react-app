import React, { Component } from 'react';
import './NotesList.css';
import Note from './Note.js';

class NotesList extends Component {
  render() {
    let elements = [ "Item one", "Item B", "And thirdly", "Item d", "5" ];
    return (
      <div className="NotesList-list">
          { elements.map( ( value, index ) => {
            return <Note key={ index } value={ value } />
          } ) }
      </div>
    );
  }
}

export default NotesList;
