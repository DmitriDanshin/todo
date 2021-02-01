// 8

import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import AddNewList from "../add-new-list/add-new-list";

import './app.scss';


export default class App extends Component {

    maxId = 100;

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++,
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray,
            }
        });
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            };
        });
    };
    toggleProperty = (arr, id, propName) => {

        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };


    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Do something'),
        ],
        term: '',
        filter: 'active' // active, done, all
    };

    onSearched = (e) => {
        const term = e.target.value;
        this.setState(() => {
            return {
                term: term.toLowerCase().trim()
            }
        });
    };
    onFilterChanged = (filter) => {
        this.setState({filter});
    }

    search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term) > -1;
        });
    }

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=> !item.done);
            case 'done':
                return items.filter((item)=> item.done);
            default:
                return items;

        }
    }

    render() {

        const {todoData, term, filter} = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.filter((el) => !el.done).length;

        return (
            <div className={'todo'}>
                <AppHeader {...[todoCount, doneCount]}/>
                <SearchPanel onSearched={this.onSearched} toggleStatus={this.toggleStatus } filter = {filter}
                             onFilterChanged = {this.onFilterChanged}/>
                <TodoList todos={visibleItems} onDeleted={(id) => this.deleteItem(id)}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}
                />
                <AddNewList onItemAdded={this.addItem}/>
            </div>
        );
    };
}
