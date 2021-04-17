import React from 'react';
import withStyle from './withStyle';
import CreateTask from './components/CreateTask/CreateTask';
import Tasks from './components/Tasks/Tasks';

const Dashboard = ({ className }) => {
  return (
    <div className={className}>
      <h1> Liste des tâches </h1>
      <Tasks />
      <h1> Créer une nouvelle tâche </h1>
      <CreateTask />
    </div>
  );
};

export default withStyle(Dashboard);
