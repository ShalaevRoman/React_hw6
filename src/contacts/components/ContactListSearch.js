import React from "react";
import '../../contacts/Style/SearchFieldSection.css';
import { ContactItem } from "../components/ContactItem";

export function ContactListSearch(props) {
    return(
        <article className="searchField_wrapper">
            <input
                className='searchField_search'
                type="text"
                placeholder="Search-contact"
                onChange={(event) => props.changeValue(event.target.value)}
            />
            <ul className='searchField_list'>
                {props.filteredContacts.map((itemContact, index) => {
                    return (
                        <ContactItem
                            key={itemContact.phoneNumber}
                            itemContact={itemContact}
                            index={index}
                            setEditable={props.setEditable}
                            setActive={props.setActive}
                            removeContact={props.removeContact}
                        />
                    )
                })}
            </ul>
        </article>
    )
}