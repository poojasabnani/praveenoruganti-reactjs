import React,{useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from '../StepContext';


export default function ThirdStep() {
    const {setStep,userData,setUserData,submitData} = useContext(multiStepContext);
    return (
        <div>            
            <TextField label="Landmark" value={userData['landmark']} onChange={(e) => setUserData({...userData,"landmark":e.target.value})}  margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="Postal Code" value={userData['postalcode']} onChange={(e) => setUserData({...userData,"postalcode":e.target.value})}  margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="Contact Number"  value={userData['contactnumber']} onChange={(e) => setUserData({...userData,"contactnumber":e.target.value})} margin="normal" variant="outlined" color="secondary" /><br />
            <Button variant="contained" onClick={()=> setStep(2)} color="secondary">Back</Button>&nbsp;
            <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
        </div>
    )
}
