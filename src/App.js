import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserMenu from './UserMenu.js';
import NotesSidebar from './NotesSidebar.js';
import NotesBody from './NotesBody.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Notes.js</h1>
          <UserMenu isLoggedIn="false" />
        </header>
        <div className="App-body">
          <NotesSidebar />
          <NotesBody />
        </div>
        <footer className="App-footer">
          <div className="App-footer-copyright">
            Copyright &copy; 2020
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
