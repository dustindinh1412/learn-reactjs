import React from 'react';
import {Todo} from '../../interfaces/TodoItemInterface';
import TodoList from './TodoList';

function TodoFeature() {

    const todoListItems: Todo[] = [
        {
            id:     1,
            title: "Walking",
        },
        {
            id:     2,
            title: "Swimming",
        },
        {
            id:     3,
            title: "Eating",
        }
    ];

    return (
        <TodoList todoItemsList={todoListItems}/>
    );
}


export default TodoFeature;