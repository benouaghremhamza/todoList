import React from 'react';
import useTasks from './useTasks';
import Task from './components/Task';
import withStyle from './withStyle';

const Tasks = ({ className }) => {
  const { tasks, clearTask, toggleTaskStatus } = useTasks();
  return (
    <section className={className}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          clearTask={clearTask}
          toggleTaskStatus={toggleTaskStatus}
        />
      ))}
    </section>
  );
};

export default withStyle(Tasks);
