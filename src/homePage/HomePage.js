import { Link } from "react-router-dom";

import './HomePage.css'

export function HomePage () {
    return(
        <div className='homePage_wrapper'>
            <h1 className='homePage_title'>Home Page</h1>
            <div className='app_container'>
                <div className='app_contacts'>
                    <h2>Contacts app</h2>
                    <p>For application transitions <Link to="/contacts">CLICK HERE!</Link></p>
                </div>
                <div className='app_todos'>
                    <h2>To-do app</h2>
                    <p>For application transitions <Link to="/todo">CLICK HERE!</Link></p>
                </div>
            </div>
        </div>
    )
}