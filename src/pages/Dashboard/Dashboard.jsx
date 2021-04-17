import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../../redux/todo/selectors';
import { add, clear } from '../../redux/todo/actions';

const Dashboard = () => {
  const data = useSelector(getTodos);
  const dispatch = useDispatch();
  console.log(data);

  const addTodo = useCallback(() => {
    dispatch(add({ title: 'zz', content: 'rrr' }));
  }, []);

  const clearTodo = useCallback(() => {
    dispatch(clear());
  }, []);

  return (
    <div>
      <div>
        Dashboard
        <button type="button" onClick={addTodo}>
          ADD
        </button>
        <button type="button" onClick={clearTodo}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
