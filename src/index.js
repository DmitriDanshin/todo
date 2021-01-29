// 9

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";

const App = () => {
    const todoData = [
        {label: "Drink Coffee", important: false, bold: true},
        {label: "Build Awesome React App", important: true, bold: true},
        {label: "Make something", important: false, bold: true},
    ];
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos = {todoData}/>
        </div>
    );
}


ReactDOM.render(<App/>, document.querySelector('#root'));