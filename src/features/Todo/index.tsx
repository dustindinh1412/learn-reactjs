import { stat } from 'fs';
import React, { useState } from 'react';
import {Todo} from '../../interfaces/TodoItemInterface';
import TodoList from './TodoList';

function TodoFeature() {

    const todoListItems: Todo[] = [
        {
            id:     1,
            title: "Walking",
            status: "doing",
        },
        {
            id:     2,
            title: "Swimming",
            status: "doing",
        },
        {
            id:     3,
            title: "Eating",
            status: "doing",
        }
    ];

    const [todoList, setTodoList] = useState(todoListItems);

    function handleTodoItemClick(index: number, status: string) {
        
        const newTodoListItems = [...todoListItems];
        newTodoListItems[index] = {
            ...newTodoListItems[index],
            status: status === 'doing' ? 'completed' : 'doing'
        }
        setTodoList(newTodoListItems);

        console.log(todoList[index]);
    }

    return (
        <TodoList todoItemsList={todoList} onTodoItemClick={handleTodoItemClick}/>
    );
}


export default TodoFeature;