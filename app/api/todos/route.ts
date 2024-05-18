import { NextRequest, NextResponse } from 'next/server';
import db from '~/db/drizzle';
import { todos } from '~/db/schema';

export function GET(request: NextRequest) {
  const data = db.select().from(todos).all();
  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const content = body['content'];

  if (typeof content !== 'string' || !content) {
    return NextResponse.json(
      { message: 'Content is required and must be a string' },
      { status: 400 }
    );
  }

  const newTodo = await db.insert(todos).values({ content }).returning();
  return NextResponse.json({ data: newTodo }, { status: 201 });
}
