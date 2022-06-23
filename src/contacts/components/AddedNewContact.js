import React, {useReducer, useState} from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../Style/AddedNewContact.css'

const reducer = (state, action) => {
    switch (action.type) {
        case 'firstName':
            return {
                ...state,
                firstName: action.newValue
            }
        case 'lastName':
            return {
                ...state,
                lastName: action.newValue
            }
        case 'phoneNumber':
            return {
                ...state,
                phoneNumber: action.newValue
            }
        default: return state
    }
}

export function AddedNewContact({ dataContacts, setDataContacts }) {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        phoneNumber: '',
    })

    const setValue = (type, newValue) => dispatch({ type: type, newValue})

    return (
        <form
            className={'form_container'}
            noValidate autoComplete="off"
        >
            <div className={'textField_wrapper'}>
                <TextField
                    className={'field'}
                    label="First Name"
                    variant="outlined"
                    required
                    onChange={(event) => setValue("firstName", event.target.value)}
                />
                <TextField
                    className={'field'}
                    label="Last Name"
                    variant="outlined"
                    required
                    onChange={(event) => setValue("lastName", event.target.value)}
                />
                <TextField
                    className={'field'}
                    label="Number"
                    variant="outlined"
                    required
                    onChange={(event) => setValue("phoneNumber", event.target.value)}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {setDataContacts([...dataContacts, state])}}
            >
                Added
            </Button>
        </form>
    )
}