import React from 'react';

const TodoListItem = ({label, important = false, bold = false}) =>{
    const liStyle = {
        color: important ? 'tomato' : 'black',
        fontWeight: bold ? 'bold' : '',
    }
    return <span style={liStyle}>{label}</span>
}

export default TodoListItem;