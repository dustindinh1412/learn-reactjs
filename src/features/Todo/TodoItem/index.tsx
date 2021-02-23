import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';

function TodoItem(props: {todoItem: Todo}) {
    const {todoItem} = props;
    return (
        <li key={todoItem.id}> {todoItem.title}</li>
    );
}
export default TodoItem;