import { Component } from 'react';
import { TodoItem } from './TodoItem'

export class TodoList extends Component {

    render() {
        return (
            <>
                <ul>
                    { this.props.dataItems.map(todoItem =>
                        <TodoItem
                            key={todoItem.id}
                            item={todoItem}
                            addСurrentItem={this.props.addСurrentItem}
                        />)
                    }
                </ul>
            </>
        )
    }
}