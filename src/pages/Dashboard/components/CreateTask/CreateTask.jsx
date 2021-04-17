import React, { useState } from 'react';
import useCreateTask from './useCreateTask';

const CreateTask = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createTask } = useCreateTask();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createTask({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor="content">
          Content:
          <input
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateTask;
