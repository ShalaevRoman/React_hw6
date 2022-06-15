import { Component } from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {AddingTodos} from "./components/AddingTodos";
import {TodoInformation} from "./components/TodoInformation";
import './Todo.css';

export class Todo extends Component {
    state = {
        list: [],
        todoItem: {}
    }

    todoOnchange = (value, type) => {
        this.setState({
            todoItem: {
                ...this.state.todoItem,
                [type]: value
            }
        });
    }

    switchItemCompleted = (id) => {
        const item = this.state.list.find(todoItem => todoItem.id === id);

        const updatedItem = {
            ...item,
            completed: !item.completed,
            history: [...item.history, {
                field: "Completed",
                action: 'change',
                prevValue: item.completed,
                currentValue: !item.completed,
                appliedAt: new Date().toDateString() + " " + new Date().toLocaleTimeString()
            }],
        }

        this.setState({
            list: this.state.list.map(todoItem => todoItem.id === updatedItem.id ? updatedItem : todoItem)
        })
    }

    addedNewTodo = (event) => {
        event.preventDefault()

        const newTodo = {
            id: new Date().getMilliseconds(),
            title: event.target[0].value,
            description: '',
            completed: false,
            history: [{
                field: '',
                action: 'creation',
                currentValue: event.target[0].value,
                appliedAt: new Date().toDateString() + " " + new Date().toLocaleTimeString(),
            }]
        }

        const updatedList = [...this.state.list, newTodo]

        this.setState({list: updatedList})

        event.target[0].value = '';
    }

    caseDisplay = (id, event) => {
        const target = event.target
        console.log(event);
        if(target.tagName === 'H3' || target.tagName === 'LI') {
            const todo = this.state.list.find(todo => todo.id === id);
            this.setState({todoItem: todo});
            return
        }else if(target.tagName === "DIV") {
            this.switchItemCompleted(id)
        }

    }

    changesTitleTodo = (event) => {
        const item = this.state.list.find(todo => todo.id === this.state.todoItem.id);

        const newTodoItem = {
            ...item,
            title: event.target.value,
            history: [...item.history, {
                field: "title",
                action: 'change',
                prevValue: item.title,
                currentValue: event.target.value,
                appliedAt: new Date().toDateString() + " " + new Date().toLocaleTimeString()
            }],
        }

        const newList = this.state.list.map(todo => todo.id === newTodoItem.id ? newTodoItem : todo)

        this.setState({
            ...this.state,
            list: newList,
        });
    }

    changesDescriptionTodo = (event) => {
        const item = this.state.list.find(todo => todo.id === this.state.todoItem.id);

        const newTodoItem = {
            ...item,
            description: event.target.value,
            history: [...item.history, {
                field: "description",
                action: 'change',
                prevValue: item.description,
                currentValue: event.target.value,
                appliedAt: new Date().toDateString() + " " + new Date().toLocaleTimeString()
            }],
        }

        const newList = this.state.list.map(todo => todo.id === newTodoItem.id ? newTodoItem : todo)

        this.setState({
            ...this.state,
            list: newList,
        });
    }


    render() {
        return (
            <div className='todoWrapper'>
                <div className='todoAction'>
                    <TodoForm />
                    <TodoList
                        dataItems={this.state.list}
                        addСurrentItem={this.caseDisplay}
                    />
                    <AddingTodos
                        className="AddingTodoForm"
                        addedNewTodo={this.addedNewTodo}
                    />
                </div>
                <div  className='todoInformation'>
                    <TodoInformation
                        todoInfo={this.state.todoItem}
                        changesDescriptionTodo={this.changesDescriptionTodo}
                        changesTitleTodo={this.changesTitleTodo}
                        todoOnchange={this.todoOnchange}
                    />
                </div>
            </div>
        );
    }
}