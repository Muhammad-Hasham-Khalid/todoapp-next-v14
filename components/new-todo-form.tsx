import { createTodo } from '~/actions';

export function NewTodoForm() {
  return (
    <form className="flex flex-col gap-2" action={createTodo}>
      <input
        type="text"
        name="content"
        required
        className="border border-black/30 px-2 py-1 rounded-md"
      />
      <button
        type="submit"
        className="bg-black text-white px-4 py-1 rounded-md hover:scale-105 active:scale-95 transition-transform"
      >
        Add
      </button>
    </form>
  );
}
