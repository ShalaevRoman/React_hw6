import React, {useEffect, useState} from "react";
import { HeaderContacts } from './components/HeaderContacts';
import { SearchFieldSection } from './components/SearchFieldSection';
import { Popup } from './components/Popup'
import './Style/Contacts.css'

const initialContacts = [
    {
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
    const [changedContact, setChangedContact] = useState(null)

    const filteredContacts = dataContacts.filter(contact => {
        return (contact.firstName.toLowerCase().includes(value.toLowerCase())
        || contact.lastName.toLowerCase().includes(value.toLowerCase())
        || contact.phoneNumber.toLowerCase().includes(value.toLowerCase())
        )
    });

    const removeContact = (number) => {
        setDataContacts(dataContacts.filter((contact) => contact.phoneNumber !== number))
    }

    useEffect(() => {
        if(changedContact !== null) {
            setDataContacts(dataContacts.map((itemContact, index) => {
                return editable === index ? changedContact : itemContact;
            }))
            console.log(changedContact);
        }
    }, [changedContact])

    console.log(dataContacts);
    console.log(dataContacts[editable]);
    return (
        <div className='contacts-wrapper'>
            <HeaderContacts />
            <SearchFieldSection
                filteredContacts={filteredContacts}
                changeValue={setValue}
                setActive={setPopupActive}
                setEditable={setEditable}
                removeContact={removeContact}
            />
            {editable !== null && (
                <Popup
                    active={popupActive}
                    setActive={setPopupActive}
                    itemContact={dataContacts[editable]}
                    setEditable={setEditable}
                    setChangedContact={setChangedContact}
                    changedContact={changedContact}
                />
            )}
        </div>
    );
}