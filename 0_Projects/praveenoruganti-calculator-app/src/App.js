import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Praveen Oruganti Calculator App</Typography>
        </Toolbar>
      </AppBar>
      <Calculator />
    </div>
  );
}

export default App;
