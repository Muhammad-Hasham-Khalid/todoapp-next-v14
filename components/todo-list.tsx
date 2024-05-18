import { Todo } from '~/db/schema';
import { SingleTodo } from './single-todo';

type TodoListProps = {
  todos: Todo[];
};

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="py-5 h-3/5 overflow-y-auto">
      {todos.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
