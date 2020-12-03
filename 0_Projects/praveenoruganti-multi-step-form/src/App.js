import React, { useContext } from 'react';
import './App.css';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import { Stepper, StepLabel, Step } from '@material-ui/core';
import { multiStepContext } from './StepContext';
import DisplayData from './components/DisplayData';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1: return <FirstStep />
      case 2: return <SecondStep />
      case 3: return <ThirdStep />
    }
  }
  return (
    <div className="App">
      <div className="App-header">
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Praveen Oruganti Multi Step Form</Typography>
          </Toolbar>
        </AppBar><br/><br/><br/><br/>
        <div className="center-stepper">
          <Stepper style={{ width: '18%' }} activeStep={currentStep - 1} orientation='horizontal'>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        <br />
        {finalData.length > 0 ? <DisplayData /> : ''}

      </div>
    </div>
  );
}

export default App;
