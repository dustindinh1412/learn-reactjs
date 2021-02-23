import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';
import TodoItem from '../TodoItem';

function TodoList(props: {todoItemsList: Todo[]}) {
    const {todoItemsList} = props;
    return (
        <ul>
            {
                todoItemsList.map( todoItem => {
                    return <TodoItem key={todoItem.id} todoItem={todoItem} />
                })
            }
        </ul>
    );
}

export default TodoList;