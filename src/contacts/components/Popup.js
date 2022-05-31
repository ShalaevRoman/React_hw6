import React, { useEffect, useState } from "react";
import '../Style/Popup.css'

export function Popup(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        console.log(props.itemContact);
        setFirstName(props.itemContact.firstName);
        setLastName(props.itemContact.lastName);
        setPhoneNumber(props.itemContact.phoneNumber);
    }, [props.itemContact])

     return (
        <div className={props.active ? "popup_wrapper active" : 'popup_wrapper'}>
            <div className="popup_content">
                <div className="popup_header">
                    <h2>
                        Edit Contact: {firstName} {lastName}
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
                            firstName: firstName,
                            lastName: lastName,
                            phoneNumber: phoneNumber
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
                            type="text"
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <p>
                            Last Name
                        </p>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <p>
                            Phone number
                        </p>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
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