import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getTodos } from '../../../../redux/todo/selectors';
import { clear } from '../../../../redux/todo/actions';

const useTasks = () => {
  const tasks = useSelector(getTodos);
  const dispatch = useDispatch();

  const clearTask = useCallback((id) => {
    console.log(id);
    dispatch(clear(id));
  }, []);

  return {
    tasks,
    clearTask,
  };
};

export default useTasks;
