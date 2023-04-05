import useAuth from '../../components/commons/hooks/useAuth';
import Todos from '../../components/units/todo/Todos';

export default function TodoPage() {
  useAuth();

  return <Todos />;
}
