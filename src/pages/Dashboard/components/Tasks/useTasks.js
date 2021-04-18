import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { getTodos } from '../../../../redux/todo/selectors';
import { clear, toggle } from '../../../../redux/todo/actions';

const useTasks = () => {
  const tasks = useSelector(getTodos);
  const dispatch = useDispatch();

  const clearTask = useCallback((id) => {
    dispatch(clear(id));
  }, []);

  const toggleTaskStatus = useCallback((id) => {
    dispatch(toggle(id));
  }, []);

  return {
    tasks,
    clearTask,
    toggleTaskStatus,
  };
};

export default useTasks;
