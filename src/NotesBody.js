import React, { Component } from 'react';
import './NotesBody.css';

export default class NotesBody extends Component {
  constructor( props ) {
    super( props );
  }

  render() {
    let content = <canvas className='NotesBody-freeform' id='NotesBodyCanvas'></canvas>;

    if( this.props.content_type == "columns" ) {
      content = <div className='NotesBody-columns'></div>;
    }

    return (
      <div className="NotesBody-window">
        {content}
      </div>
    );
  }
}
