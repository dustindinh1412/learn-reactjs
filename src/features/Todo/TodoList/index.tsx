import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';
import TodoItem from '../TodoItem';

function TodoList(props: {todoItemsList: Todo[], onTodoItemClick: Function}) {
    const {todoItemsList,onTodoItemClick} = props;

    function handleItemClick(index: number, status: string) {
        if (!onTodoItemClick) return;
        onTodoItemClick(index,status);
    }

    return (
        <ul>
            {
                todoItemsList.map( (todoItem, index) => {
                    return <TodoItem 
                        key={todoItem.id} 
                        todoItem={todoItem} 
                        onItemClick={()=>handleItemClick(index,todoItem.status)}
                        index= {index}
                        />
                })
            }
        </ul>
    );
}

export default TodoList;