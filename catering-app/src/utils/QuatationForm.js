import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { getCityByName } from './getCity';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import {Button as UIButton } from '@mui/material';

function QuatationForm() {
    const [cities, setCities] = useState([]);
    // const cities = [];
    const geterCity = async (e) => {
        setCities(getCityByName(e.target.value));
    }

  
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            Validate
            autoComplete="on"
            onSubmit={handleSubmit}
        >
            <div>
                <TextField
                    id="name"
                    label="Enter your name"
                    variant="outlined"
                    name="name"
                    required 
                />

                <TextField
                    id="contact"
                    name="contact"
                    label="Enter your contact"
                    variant="outlined"
                    required 
                />

                <Autocomplete
                    name="city"
                    required 
                    onKeyUp={geterCity}
                    id="city"
                    options={cities}
                    renderInput={(params) => (
                        <TextField {...params} label="Choose city" margin="normal" />
                    )}
                    renderOption={(props, option, { inputValue }) => {
                        const matches = match(option, inputValue);
                        const parts = parse(option, matches);

                        return (
                            <li {...props}>
                                <div>
                                    {parts.map((part, index) => (
                                        <span
                                            key={index}
                                            style={{
                                                fontWeight: part.highlight ? 700 : 400,
                                            }}
                                        >
                                            {part.text}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        );
                    }}
                />
                

                <TextField
                    id="email"
                    name="email"
                    label="Enter email(Optional)"
                    type="email"
                    autoComplete="current-email"
                />
                    <UIButton type="submit" variant="contained">Get Quatation</UIButton>


            </div>


        </Box>

    )

}

export default QuatationForm;