import React, { useState } from 'react';
import withStyle from './withStyle';
import Button from '../../../../../../components/atoms/Button';

const statuses = {
  pending: 'Non terminée',
  completed: 'Complétée',
};

const Task = ({ className, task, clearTask, toggleTaskStatus }) => {
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const deleteTaskWithAnimation = () => {
    setIsBeingDeleted(true);
    setTimeout(() => {
      clearTask(task.id);
      setIsBeingDeleted(false);
    }, 300);
  };

  return (
    <div className={className}>
      <button
        type="button"
        className={`task ${isBeingDeleted && 'task--deleted'} 
       `}
        onClick={() => toggleTaskStatus(task.id)}
      >
        <span className="task--item task--item--title">{task.title}: </span>
        <span className="task--item task--item--content">{task.content}</span>
        <Button
          type="button"
          skin="outline"
          color="blue"
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            deleteTaskWithAnimation();
          }}
        >
          Supprimer
        </Button>
        <span className="task--item task--item--status">
          {statuses[task.state]}
        </span>
      </button>
    </div>
  );
};

export default withStyle(Task);
