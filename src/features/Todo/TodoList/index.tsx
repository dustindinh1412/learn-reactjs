import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';
import TodoItem from '../TodoItem';

interface Props {
    todoItemsList: Todo[],
    onTodoItemClick?: Function
}

const TodoList = (props: Props) => {
    
    const {todoItemsList,onTodoItemClick} = props;

    const handleItemClick = (index: number) => {
        if (!onTodoItemClick) return;
        
        onTodoItemClick(index);
    }

    return (
        <ul>
            {
                todoItemsList.map( (todoItem, index) => {
                    return <TodoItem 
                                key={todoItem.id} 
                                todoItem={todoItem} 
                                onItemClick={handleItemClick}
                                index= {index}
                            />
                })
            }
        </ul>
    );
}

export default TodoList;