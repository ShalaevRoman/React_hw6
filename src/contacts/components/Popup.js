import React, { useEffect, useRef, useReducer } from "react";
import '../Style/Popup.css'

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

export function Popup(props) {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        phoneNumber: '',
    })

    const setValue = (type, newValue) => dispatch({ type: type, newValue})
    const ref = useRef(null);

    useEffect(() => {
        setValue("firstName", props.itemContact.firstName)
        setValue("lastName", props.itemContact.lastName)
        setValue("phoneNumber", props.itemContact.phoneNumber)
    }, [props.itemContact]);

    useEffect(() => {
        ref.current.focus();
    }, [props.active])

     return (
        <div className={props.active ? "popup_wrapper active" : 'popup_wrapper'}>
            <div className="popup_content">
                <div className="popup_header">
                    <h2>
                        Edit Contact: {state.firstName} {state.lastName}
                    </h2>
                    <p
                        onClick={() => {
                            props.setActive(false)
                            props.setEditable(null)
                        }}
                    >
                        X
                    </p>
                </div>
                <form
                    className="popup_form"
                    onSubmit={(event) => {
                        event.preventDefault();
                        props.setChangedContact({
                            firstName: state.firstName,
                            lastName: state.lastName,
                            phoneNumber: state.phoneNumber
                        });
                        props.setActive(false)
                    }}
                >
                    <div className="popup_photo"></div>
                    <div className="popup_info">
                        <p>
                            First Name
                        </p>
                        <input
                            ref={ref}
                            type="text"
                            value={state.firstName}
                            onChange={(event) => setValue("firstName", event.target.value)}
                        />
                        <p>
                            Last Name
                        </p>
                        <input
                            type="text"
                            value={state.lastName}
                            onChange={(event) => setValue("lastName", event.target.value)}
                        />
                        <p>
                            Phone number
                        </p>
                        <input
                            type="text"
                            value={state.phoneNumber}
                            onChange={(event) => setValue("phoneNumber", event.target.value)}
                        />
                        <button>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}