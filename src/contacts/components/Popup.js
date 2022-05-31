import React, { useState } from "react";
import '../Style/Popup.css'

export function Popup(props) {
    const [firstName, setFirstName] = useState(props.itemContact.firstName);
    const [lastName, setLastName] = useState(props.itemContact.lastName);
    const [phoneNumber, setPhoneNumber] = useState(props.itemContact.phoneNumber);


    return (
        <div className={props.active ? "popup_wrapper active" : 'popup_wrapper'}>
            <div className="popup_content">
                <div className="popup_header">
                    <h2>
                        Edit Contact: {firstName} {lastName}
                    </h2>
                    <p
                        onClick={() => props.setActive(false)}
                    >X
                    </p>
                </div>
                <form className="popup_form">
                    <div className="popup_photo"></div>
                    <div className="popup_info">
                        <p>
                            First Name
                        </p>
                        <input
                            type="text"
                            defaultValue={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <p>
                            Last Name
                        </p>
                        <input
                            type="text"
                            defaultValue={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                        <p>
                            Phone number
                        </p>
                        <input
                            type="text"
                            defaultValue={phoneNumber}
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