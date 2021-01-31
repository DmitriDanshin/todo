import React from 'react';
import './app-header.scss';

const AppHeader = (arg) => {
    return (
        <div className={'app-header d-flex'}>
            <h1>Todo List </h1>
            <h2>{arg[0]} more to do {arg[1]} done</h2>
        </div>
    );
}

export default AppHeader;