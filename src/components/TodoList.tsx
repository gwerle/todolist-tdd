import React from 'react'
import { TodoItem } from './TodoItem';

type Props = {
    todos: string[]
    removeTodo: (index: number) => void;
}

export default function TodoList({todos, removeTodo}: Props) {
    const handleRemoveById = (index: number) => {
      removeTodo(index);
    }

    return (
      <div>
        <ul data-testid='todo-list'>
          {todos.map((todo, index) => (
              <TodoItem 
                key={index}
                todo={todo}
                index={index}
                handleRemoveById={handleRemoveById}
              />
            )
          )}
        </ul>
      </div>
    )
}


