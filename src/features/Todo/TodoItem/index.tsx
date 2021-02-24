import React from 'react';
import {Todo} from '../../../interfaces/TodoItemInterface';
import classnames from 'classnames';

import './style.css';

interface Props {
    todoItem: Todo;
    onItemClick?: Function,
    index: number
}

const TodoItem: React.FC<Props> = (props: Props) => {

    const {todoItem, onItemClick, index} = props;

    const handleClick = (index: number) => {
        if (!onItemClick) return;

        onItemClick(index);
    }

    return (
        <li 
            className={classnames({
                'todo-item': true,
                'todo-item--completed': todoItem.status === 'completed'})} 
            key={todoItem.id} 
            onClick={ () => handleClick(index)}> 
            {todoItem.title} 
        </li>   
            
    );
}
export default TodoItem;