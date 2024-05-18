'use client';

import { useTransition } from 'react';
import { completeTodo } from '~/actions';
import type { Todo } from '~/db/schema';

type SingleTodoProps = {
  todo: Todo;
};

export function SingleTodo({ todo }: SingleTodoProps) {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => completeTodo(todo.id, todo.completed));
  };

  return (
    <div className="flex justify-between items-center py-2 border-b border-b-black/30 px-2">
      <p className={todo.completed ? 'line-through' : ''}>{todo.content}</p>
      <button
        type="button"
        className="bg-black text-white px-2 rounded-md hover:scale-105 active:scale-95 transition-transform py-1"
        onClick={handleClick}
        disabled={pending}
      >
        {todo.completed ? 'Completed' : 'Complete'}
      </button>
    </div>
  );
}
