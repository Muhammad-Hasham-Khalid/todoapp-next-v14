'use server';

import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import db from '~/db/drizzle';
import { todos } from '~/db/schema';

export async function createTodo(data: FormData) {
  const content = data.get('content');
  if (typeof content !== 'string' || !content) {
    throw new Error('Content is required and is must be a string');
  }

  await db.insert(todos).values({ content }).returning();
  revalidatePath('/todos');
}

export async function completeTodo(todoId: number, currentState: boolean) {
  await db
    .update(todos)
    .set({ completed: !currentState })
    .where(eq(todos.id, todoId))
    .returning();

  revalidatePath('/todos');
}
