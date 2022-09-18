import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { useContext, useState } from 'react';
import { getCityByName } from './getCity';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

import {Button as UIButton } from '@mui/material';
import dishListContext from "../dishContext";
function QuatationForm() {
    const [cities, setCities] = useState([]);
    // const cities = [];
    const geterCity = async (e) => {
        setCities(getCityByName(e.target.value));
    }
    let droppedList = useContext(dishListContext);

   // form handler 
   const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const contactInput = event.target.contact.value;
    const cityInput = event.target.city.value;
    const emailInput = event.target.email.value;

    console.log(nameInput); 
    console.log(contactInput);
    console.log(cityInput);
    console.log(emailInput); 
    console.log(droppedList.droppedItem);
};

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
                    name="name"
                    label="Enter your name"
                    variant="outlined"
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
                required 
                    onKeyUp={geterCity}
                    id="city"
                    name="city"
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