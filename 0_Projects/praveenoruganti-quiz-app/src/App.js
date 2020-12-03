import React from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Praveen Oruganti React Quiz App</Typography>
        </Toolbar>
      </AppBar> <br/><br/>
      <Quiz />
    </div>
  );
}
