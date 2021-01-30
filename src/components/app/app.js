// 8

import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoList from "../todo-list/todo-list";
import AddNewList from "../add-new-list/add-new-list";

import './app.scss';


export default class App extends Component {

    maxId = 100;

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id );

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx+1)
            ];

            return {
                todoData: newArray,
            }
        });
    }
    addItem = (text) =>{
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++,
        }

        this.setState(({todoData})=>{
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            };
        });
    };
    state = {
        todoData: [
            {label: "Drink Coffee", important: false, bold: true, id: 1},
            {label: "Build Awesome React App", important: true, bold: true, id: 2},
            {label: "Make something", important: false, bold: true, id: 3},
        ],
    };

    todoHeader = {
        toDo: 2,
        done: 3
    }

    render() {
        return (
            <div className={'todo'}>
                <AppHeader {...this.todoHeader}/>
                <SearchPanel/>
                <TodoList todos={this.state.todoData} onDeleted={(id) => this.deleteItem(id)}/>
                <AddNewList onItemAdded={this.addItem}/>
            </div>
        );
    };
}
