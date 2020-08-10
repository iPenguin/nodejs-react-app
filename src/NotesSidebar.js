import React, { Component } from 'react';
import './NotesSidebar.css';

export default class NotesSidebar extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="NotesSidebar-list">
        <label for="NotesSidebar-pages">Pages</label>
        <select id="NotesSidebar-pages" size="2"></select>
      </div>
    );
  }
}
