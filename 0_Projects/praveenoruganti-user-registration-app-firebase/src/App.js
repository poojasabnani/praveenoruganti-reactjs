import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import firebase from 'firebase';
import TableForUserData from './TableForUserData'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

function App() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [emailId, setEmailId] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [failure, setFailure] = useState("");
  const [tabledata, setTabledata] = useState({});
  const [tableEnabled, setTableEnabled] = useState("");


  useEffect(() => {
    getUsers();
  }, [])


  const addUser = () => {
    const userNameCheck = tabledata.some(el => el.USER_NAME === userName);
    const emailIdCheck = tabledata.some(el => el.EMAIL_ID === emailId);
    if (userNameCheck || emailIdCheck) {
      setMessage("User Already Exists")

    } else {
      db.collection("users")
        .add({
          USER_NAME: userName,
          USER_PASS: userPass,
          EMAIL_ID: emailId,
          LOCATION: location,
          CREATED_DATE: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
          setSuccess("User Registered Successfully")

        }).catch(error => {
          setFailure("Technical Error")
        });
    }
  };

  const getUsers = () => {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const users = querySnapshot.docs.map(doc => doc.data());
        setTabledata(users)
      });

  }

  const onChange = () => {
    setSuccess('');
    setFailure('');
    setMessage('');
    addUser();
  }

  const enableSubmit = () => {
    return (userName.length > 0 && userPass.length > 0 && emailId.length > 0 && location.length > 0);
  }

  const onSearch = () => {
    setSuccess('');
    setFailure('');
    setMessage('');
    setTableEnabled(true);
    getUsers();
  }


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
          onChange={(event, newValue) => setUserName(newValue)}
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
          onChange={(event, newValue) => setUserPass(newValue)}
          onInput={e => {
            e.target.value = e.target.value.slice(0, 19);
          }}

        />
        <br />
        <TextField
          hintText="max 50 characters"
          floatingLabelText="Email Id"
          onChange={(event, newValue) => setEmailId(newValue)}
          onInput={e => {
            e.target.value = e.target.value.slice(0, 49);
          }}

        />
        <br />
        <TextField
          hintText="max 20 characters"
          floatingLabelText="Location"
          onChange={(event, newValue) => setLocation(newValue)}
          onInput={e => {
            e.target.value = e.target.value.slice(0, 19);
          }}

        />
        <br />
        <p style={{ color: 'blue' }}>
          {message}
        </p>
        <p style={{ color: 'red' }}>
          {failure}
        </p>
        <p style={{ color: 'green' }}>
          {success}
        </p>
        <br />
        <RaisedButton label="Submit" primary={true} disabled={!enableSubmit()} style={style} onClick={onChange} />
        <RaisedButton label="Lookup" primary={true} style={style} onClick={onSearch} />
        {
          (tableEnabled ? <TableForUserData
            userData={tabledata} /> : '')
        }

      </div>
    </MuiThemeProvider>

  );

}

export default App;