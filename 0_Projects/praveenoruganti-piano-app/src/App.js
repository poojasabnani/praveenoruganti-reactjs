import React from "react";
import "./App.css";
import Piano from "./components/Piano";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function App() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Praveen Oruganti Piano App</Typography>
        </Toolbar>
      </AppBar>
      <div className="app-container">
        <Piano />
      </div>
    </>
  );

}

export default App;
