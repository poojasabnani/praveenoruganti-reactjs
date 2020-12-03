import React,{useContext} from 'react';
import { Button, TextField } from '@material-ui/core';
import {multiStepContext} from '../StepContext';

export default function FirstStep() {
    const {setStep,userData,setUserData} = useContext(multiStepContext);
    return (
        <div>
            <TextField label="First Name" value={userData['firstname']} onChange={(e) => setUserData({...userData,"firstname":e.target.value})} margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="Last Name" value={userData['lastname']} onChange={(e) => setUserData({...userData,"lastname":e.target.value})} margin="normal" variant="outlined" color="secondary" /><br />
            <TextField label="Email" value={userData['email']} onChange={(e) => setUserData({...userData,"email":e.target.value})} margin="normal" variant="outlined" color="secondary" /><br />
            <Button variant="contained" onClick={()=> setStep(2)} color="primary">Next</Button>
        </div>
    )
}