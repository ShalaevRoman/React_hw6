import React, { Component } from 'react';
import './StyleCss/TodoForm.css';
import { Link } from 'react-router-dom';

export class TodoForm extends Component {
    render() {
        return (
            <form className="SearchedTodo">
                <Link to='/'>Home page!</Link>
                <h1>Todos</h1>
                <input type="text" placeholder='Search'/>
            </form>
        )
    }
}