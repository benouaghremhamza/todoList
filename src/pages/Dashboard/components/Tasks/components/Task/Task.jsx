import React, { useState, useCallback } from 'react';
import withStyle from './withStyle';

const Task = ({ className, task, clearTask }) => {
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const deleteTaskWithAnimation = useCallback(() => {
    setIsBeingDeleted(true);
    setTimeout(() => {
      clearTask(task.id);
      setIsBeingDeleted(false);
    }, 300);
  }, []);

  return (
    <div className={className}>
      <div className={`task ${isBeingDeleted && 'task--deleted'}`}>
        <span className="task--item task--item--title">{task.title}: </span>
        <span className="task--item task--item--content">{task.content}</span>
        <span className="task--item">{task.status}</span>
        <button
          type="button"
          className="task--item task--item--delete-btn"
          onClick={deleteTaskWithAnimation}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default withStyle(Task);
