import React from "react";
import editButton from '../img/editButton.png';
import removeButton from '../img/removeButton.png';

export function ContactItem({itemContact, index, setEditable, setActive, removeContact}) {

    return(
        <li className='searchField_item'>
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
                            setEditable(index);
                            setActive(true);
                        }
                    }
                />
                <img
                    src={removeButton}
                    alt="removeButton"
                    onClick={() => removeContact(itemContact.phoneNumber)}
                />
            </div>
        </li>
    )
}