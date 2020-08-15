import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
  constructor( props ) {
    super( props );
    this._text = "* " + this.props.value;
  }

  render() {

    return (
      <div className="Note-base">
        {this._text}
      </div>
    );
  }
}

export default Note;
