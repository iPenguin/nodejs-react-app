import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  render() {

    return (
      <div className="Note-base">
        { this.props.value }
      </div>
    );
  }
}

export default Note;
