import React from "react";
import '../../contacts/Style/SearchFieldSection.css'
import editButton from '../img/editButton.png'
import removeButton from '../img/removeButton.png'

export function SearchFieldSection(props) {
    return(
        <article className="searchField_wrapper">
            <input
                className='searchField_search'
                type="text"
                placeholder="Search-contact"
                onChange={(event) => props.changeValue(event.target.value)}
            />
            <div className='searchField_list'>
                {props.filteredContacts.map((itemContact, index) => {
                    return (
                        <div className='searchField_item'
                            key={itemContact.phoneNumber}
                        >
                            <div className='item_info'>
                                <div className="item_photo"></div>
                                <div className='item_text'>
                                    <h3 className='item_title'>
                                        {itemContact.firstName} {itemContact.lastName}
                                    </h3>
                                    <p className='item_number'>
                                        {itemContact.phoneNumber}
                                    </p>
                                </div>
                            </div>
                            <div className='item_control'>
                                <img
                                    src={editButton}
                                    alt="editButton"
                                    onClick={() => {
                                        props.setEditable(index);
                                        props.setActive(true)}
                                    }
                                />
                                <img
                                    src={removeButton}
                                    alt="removeButton"
                                    onClick={() => props.removeContact(itemContact.phoneNumber)}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}