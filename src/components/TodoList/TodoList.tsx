import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo: Todo) => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
