// 9

import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";


import './index.scss';

const App = () => {
    const todoData = [
        {label: "Drink Coffee", important: false, bold: true, id: 1},
        {label: "Build Awesome React App", important: true, bold: true, id: 2},
        {label: "Make something", important: false, bold: true, id: 3},
    ];
    return (
        <div className={'todo'}>
            <AppHeader/>
            <SearchPanel/>

            <TodoList todos = {todoData}/>
        </div>
    );
}


ReactDOM.render(<App/>, document.querySelector('#root'));