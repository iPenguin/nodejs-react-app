import React, { Component } from 'react';
import logo from '../logo.svg';
import './NotesjsUi.css';
import UserMenu from './UserMenu.js';
import NotesSidebar from './NotesSidebar.js';
import NotesBody from './NotesBody.js';

export default class App extends Component {
  render() {
    return (
      <div className="NotesjsUi">
        <header className="NotesjsUi-header">
          <img src={logo} className="NotesjsUi-logo" alt="logo" />
          <h1 className="NotesjsUi-title">Welcome to Notes.js</h1>
          <UserMenu isLoggedIn="false" />
        </header>
        <div className="NotesjsUi-body">
          <NotesSidebar />
          <NotesBody />
        </div>
        <footer className="NotesjsUi-footer">
          <div className="NotesjsUi-footer-copyright">
            Copyright &copy; 2020
          </div>
        </footer>
      </div>
    );
  }
}
