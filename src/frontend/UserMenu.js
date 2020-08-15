import React, { Component } from 'react';
import './UserMenu.css';
import UserAccount from './User/Account.js';
import UserSettings from './User/Settings.js';
import UserLogin from './User/Login.js';
import UserLogout from './User/Logout.js';

export default class UserMenu extends Component {
  constructor( props ) {
    super( props );
  }

  render() {

    let isLoggedIn = this.props.isLoggedIn;
    if( isLoggedIn ) {
      return (
        <div className="UserMenu-items">
          <UserAccount />
          <UserSettings />
          <UserLogout />
        </div>
      );
    }
    else {
      return (
        <div className="UserMenu-items">
          <UserLogin />
        </div>
      );
    }
  }
}
