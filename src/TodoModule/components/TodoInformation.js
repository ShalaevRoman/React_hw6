import { Component } from 'react';
import './StyleCss/TodoInformation.css';

export class TodoInformation extends Component {
    isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    checkForChanges(historyObj) {
            if(historyObj.action === 'change') {
                return (
                    'Field:' + ' ' + historyObj.field +
                    ',  ' + 'previous value:' +
                    '  ' + historyObj.prevValue +
                    ',  ' + 'new value:' +
                    '  ' + historyObj.currentValue +
                    ',  ' + historyObj.appliedAt)
            }
    }

    render() {
        let result;
        if(this.isEmpty(this.props.todoInfo)) {
            result = <div className='showTodo'>
                        <h1>Title: {this.props.todoInfo.title}</h1>
                        <textarea
                            onBlur={this.props.changesTitleTodo}
                            placeholder="edit title:"
                            onChange={(e) => this.props.todoOnchange(e.target.value, 'title')}
                            value={this.props.todoInfo.title}
                        />
                        <h1>description: {this.props.todoInfo.description}</h1>
                        <textarea
                            onBlur={this.props.changesDescriptionTodo}
                            placeholder="edit description:"
                            onChange={(e) => this.props.todoOnchange(e.target.value, 'description')}
                            value={this.props.todoInfo.description}
                        />
                        <div className='todoFooter'>
                            <h1>History</h1>
                            <p>Created task with title: "{this.props.todoInfo.history[0].currentValue}"  "{this.props.todoInfo.history[0].appliedAt}"</p>
                            <ul>history of changes:
                                {this.props.todoInfo.history.map(historyItem => <li
                                    key={historyItem.appliedAt + Math.random()}
                                >
                                    {this.checkForChanges(historyItem)}
                                </li>
                                )}
                            </ul>

                        </div>
                    </div>
        } else {
            result = <div className='hideTodo'>
                        <h1>
                            Nothing Selected addingChanges
                        </h1>
                    </div>
        }
        return (
            <div>
                {result}
            </div>
        )
    }
}