import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Input, IconButton } from "@material-ui/core";
import Message from "./components/Message/Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({ username, message: input, timestamp: firebase.firestore.FieldValue.serverTimestamp() });
    setInput("");
  };

  return (
    <div className="App">
      <h1> Praveen Oruganti Messenger</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <Input
            placeholder="Type a message"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            className="app__input"
          />
          <IconButton
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
            disabled={!input}
            className="app__iconButton"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => {
          return <Message key={id} message={message} username={username} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
