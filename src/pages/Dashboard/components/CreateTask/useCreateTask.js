import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../../redux/todo/actions';

const useCreateTask = () => {
  const dispatch = useDispatch();

  const createTask = useCallback(({ title, content }) => {
    dispatch(add({ title, content }));
  }, []);

  return {
    createTask,
  };
};

export default useCreateTask;
