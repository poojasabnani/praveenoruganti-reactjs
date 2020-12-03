import React, { Component } from 'react';
import { checkUser, createUser, getUserInfoFromDB } from './services/APIService'
import TableForUserData from './TableForUserData'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPass: '',
      emailId: '',
      location: '',
      message: '',
      success: '',
      failure: '',
      tabledata: {},
      istableEnabled: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }


  onChange() {
    this.setState({ success: '', failure: '', message: '' });
    var response = checkUser(this.state);
    response.then((res) => {
      if (res === 'true') {
        this.setState({ message: "User Already Exists" })
      } else {
        response = createUser(this.state);
        response.then((res) => {
          if (res === 'OK') {
            this.setState({ success: "User Registered Successfully" });
          } else {
            this.setState({ failure: "Technical Error" });
          }
        });
      }
    });
  }

  enableSubmit() {
    const { userName, userPass, emailId, location } = this.state;
    return (userName.length > 0 && userPass.length > 0 && emailId.length > 0 && location.length > 0);
  }

  onSearch() {
    var response = getUserInfoFromDB(this.state);
    response.then((res) => {
      var userData = JSON.parse(res);
      this.setState({ success: '', failure: '', message: '', istableEnabled: true });
      this.setState({ tabledata: userData });
    });
  }

  render() {
    const style = {
      margin: 15,
    };

    return (

      <MuiThemeProvider>
        <div>
          <AppBar
            title="Praveen Oruganti User Registration"
          />
          <TextField
            type="text"

            hintText="max 20 characters"
            floatingLabelText="User Name"
            onChange={(event, newValue) => this.setState({ userName: newValue })}
            onInput={e => {
              e.target.value = e.target.value.slice(0, 19);
            }}
            erorText="Please enter only 20 characters"

          />
          <br />
          <TextField
            type="password"
            hintText="max 20 characters"
            floatingLabelText="Password"
            onChange={(event, newValue) => this.setState({ userPass: newValue })}
            onInput={e => {
              e.target.value = e.target.value.slice(0, 19);
            }}

          />
          <br />
          <TextField
            hintText="max 50 characters"
            floatingLabelText="Email Id"
            onChange={(event, newValue) => this.setState({ emailId: newValue })}
            onInput={e => {
              e.target.value = e.target.value.slice(0, 19);
            }}

          />
          <br />
          <TextField
            hintText="max 20 characters"
            floatingLabelText="Location"
            onChange={(event, newValue) => this.setState({ location: newValue })}
            onInput={e => {
              e.target.value = e.target.value.slice(0, 19);
            }}

          />
          <br />
          <p style={{ color: 'blue' }}>
            {this.state.message}
          </p>
          <p style={{ color: 'red' }}>
            {this.state.failure}
          </p>
          <p style={{ color: 'green' }}>
            {this.state.success}
          </p>
          <br />
          <RaisedButton label="Submit" primary={true} disabled={!this.enableSubmit()} style={style} onClick={this.onChange} />
          <RaisedButton label="Lookup" primary={true} style={style} onClick={this.onSearch} />
          {
            (this.state.istableEnabled ? <TableForUserData
              userData={this.state.tabledata} /> : '')
          }

        </div>
      </MuiThemeProvider>

    );
  }
}

