import { PropsWithChildren } from 'react';
import { NewTodoForm } from '~/components/new-todo-form';

type DashboardLayoutProps = Readonly<PropsWithChildren<{}>>;

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="mx-auto w-1/2 max-w-sm flex flex-col">
      <h1 className="text-3xl font-bold text-center py-5">Todo List</h1>
      <NewTodoForm />
      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
