import React,{useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from '../StepContext';


export default function SecondStep() {
    const {setStep,userData,setUserData} = useContext(multiStepContext);
    return (
        <div>           
            <TextField label="Country" value={userData['country']} onChange={(e) => setUserData({...userData,"country":e.target.value})}  margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="State" value={userData['state']} onChange={(e) => setUserData({...userData,"state":e.target.value})}  margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="City" value={userData['city']} onChange={(e) => setUserData({...userData,"city":e.target.value})}  margin="normal" variant="outlined" color="secondary" /><br />
            <Button variant="contained" onClick={()=> setStep(1)} color="secondary">Back</Button>&nbsp;
            <Button variant="contained" onClick={()=> setStep(3)} color="primary">Next</Button>
        </div>
    )
}
