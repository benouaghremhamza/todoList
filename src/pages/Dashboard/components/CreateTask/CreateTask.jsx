import React, { useState } from 'react';
import useCreateTask from './useCreateTask';
import InputField from '../../../../components/atoms/InputField';
import withStyle from './withStyle';
import Button from '../../../../components/atoms/Button';

const CreateTask = ({ className }) => {
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
    <section className={className}>
      <form onSubmit={handleSubmit}>
        <div className="form-inputs">
          <label htmlFor="title">
            Title:
            <InputField
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
          </label>

          <label htmlFor="content">
            Content:
            <InputField
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="content"
            />
          </label>
        </div>

        <Button
          type="submit"
          skin="fill"
          color="blue"
          borderRadius="0.5rem"
          padding="1rem 4rem"
          withAnimation
        >
          Create
        </Button>
      </form>
    </section>
  );
};

export default withStyle(CreateTask);
