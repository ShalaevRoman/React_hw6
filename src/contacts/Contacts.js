import React, { useState } from "react";
import { HeaderContacts } from './components/HeaderContacts';
import { SearchFieldSection } from './components/SearchFieldSection';
import { Popup } from './components/Popup'
import './Style/Contacts.css'

const initialContacts = [{
    firstName: 'Vlad',
    lastName: 'Krivokon',
    phoneNumber: '0669417241'
},
    {
        firstName: 'Roman',
        lastName: 'Shalaev',
        phoneNumber: '0506956266'
    },
    {
        firstName: 'Marina',
        lastName: 'Seliverstova',
        phoneNumber: '0958684618'
    }]

export function Contacts() {
    const [dataContacts, setDataContacts] = useState(initialContacts);
    const [value, setValue] = useState('')
    const [popupActive, setPopupActive] = useState(false)
    const [editable, setEditable] = useState(null)
    const [changedContact, setChangedContact] = useState({})


    const filteredContacts = dataContacts.filter(contact => {
        return (contact.firstName.toLowerCase().includes(value.toLowerCase())
        || contact.lastName.toLowerCase().includes(value.toLowerCase())
        || contact.phoneNumber.toLowerCase().includes(value.toLowerCase())
        )
    });

    return (
        <div className='contacts-wrapper'>
            <HeaderContacts />
            <SearchFieldSection
                dataContacts={filteredContacts}
                changeValue={setValue}
                setActive={setPopupActive}
                setEditable={setEditable}
            />
            <Popup
                active={popupActive}
                setActive={setPopupActive}
                itemContact={dataContacts[editable]}
            />
        </div>
    );
}