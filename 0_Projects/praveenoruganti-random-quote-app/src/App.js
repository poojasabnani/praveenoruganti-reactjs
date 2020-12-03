import React from 'react';
import QuoteBox from './QuoteBox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';
function App() {
  return (
    <div  className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Praveen Oruganti Random Quote App</Typography>
        </Toolbar>
      </AppBar> <br/><br/><br/><br/>
      <QuoteBox />    
    </div>
    
  );
}

export default App;
