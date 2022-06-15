import { Link } from "react-router-dom";
import './ErrorPage.css'

export function ErrorPage() {
    return (
        <div className='error_wrapper'>
            <h1>Error</h1>
            <p>Sorry, you need to go to <Link to='/'>Home page!</Link></p>
        </div>
    )
}