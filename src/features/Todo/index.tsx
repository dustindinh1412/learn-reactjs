import React, { useState } from 'react';
import {Todo} from '../../interfaces/TodoItemInterface';
import TodoList from './TodoList';

import './style.css';

const TodoFeature: React.FC = () => {


    // Giá trị truyền vào useState chỉ khởi tạo 1 lần duy nhất.
    // Dùng callback nếu nó là 1 hàm phức tạp.

    const [todoList, setTodoList] = useState<Todo[]>( () => {

        const todoListItems: Todo[] = [
            {
                id:     1,
                title: "Walking 👷‍♂️",
                status: "doing",
            },
            {
                id:     2,
                title: "Swimming 👌",
                status: "doing",
            },
            {
                id:     3,
                title: "Eating 🎉",
                status: "doing",
            }
        ];

        return todoListItems;
    });

    const [filteredTodoList, setFilterdTodoList] = useState<Todo[]>( ()=> {
        return [...todoList];
    });

    const handleTodoItemClick = (index: number) => {

        const newTodoListItems = [...todoList];
        
        newTodoListItems[index] = {
            ...newTodoListItems[index],
            status: newTodoListItems[index].status === 'doing' ? 'completed' : 'doing'
        }
        setTodoList(newTodoListItems);
        console.log(newTodoListItems[index]);
    }

    const handleShowAllTodo = () => {
        const newFilteredTodoList = [...todoList];
        setFilterdTodoList(newFilteredTodoList);
    }

    const handleShowCompletedTodo = () => {
        const newFilteredTodoList = todoList.filter(todo => todo.status === 'completed');
        setFilterdTodoList(newFilteredTodoList);
    }
    
    const handleShowDoingTodo = () => {
        const newFilteredTodoList = todoList.filter(todo => todo.status === 'doing');
        setFilterdTodoList(newFilteredTodoList);
    }

    return (
        <div className="todo-list">
            <TodoList todoItemsList={todoList} onTodoItemClick={handleTodoItemClick}/>
                <div className="todo-list__filter-button">
                    <button className="filter-button" onClick={handleShowAllTodo}>Show all</button>
                    <button className="filter-button" onClick={handleShowCompletedTodo}>Show completed</button>
                    <button className="filter-button" onClick={handleShowDoingTodo}>Show doing</button>
                </div>
            <TodoList todoItemsList={filteredTodoList}/>
        </div>
    );
}


export default TodoFeature;