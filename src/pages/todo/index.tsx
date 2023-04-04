import { withAuth } from '../../components/commons/hocs/withAuth';
import Todos from '../../components/units/todo/Todos';

const TodoPage = () => {
  return <Todos />;
};

export default withAuth(TodoPage);
