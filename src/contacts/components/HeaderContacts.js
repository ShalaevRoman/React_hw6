import React from "react";
import { Link }  from "react-router-dom"

import '../Style/HeaderContacts.css'

export function HeaderContacts(props) {
    return(
        <header className='header_contacts_wrapper'>
            <div className='header_title_wrapper'>
                <h1>Contacts Book</h1>
                <p>made by Roman Shalaev</p>
            </div>
            <Link to='/'>Home page!</Link>
            <a href="https://github.com/ShalaevRoman">My GitHub Account</a>
        </header>
    )
}