import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';

import './style.css';
function TodoItem(props: {todoItem: Todo, onItemClick: Function, index: number}) {
    const {todoItem, onItemClick, index} = props;

    function handleClick(index: number, status: string, event: any) {
        if (!onItemClick) return;

        const clickedItem = event.target;

        if ( status === 'doing') clickedItem.className += " todo-item--completed";
        else clickedItem.className = "todo-item";

        onItemClick(index,todoItem.status);
    }

    return (
        <li 
            className="todo-item" 
            key={todoItem.id} 
            onClick={ (event) => handleClick(index, todoItem.status, event)}> 
            {todoItem.title} 
        </li>
            
    );
}
export default TodoItem;