import { TodoList } from '~/components/todo-list';
import db from '~/db/drizzle';
import { todos } from '~/db/schema';

function getTodos() {
  return db.select().from(todos).all();
}

async function TodosPage() {
  const todos = getTodos();

  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodosPage;
