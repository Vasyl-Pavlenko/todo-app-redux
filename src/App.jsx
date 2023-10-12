import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container
      className="
        d-flex 
        flex-column 
        align-items-center 
        justify-content-center
      "
      style={{ minHeight: '100vh' }}
    >     
      <h1 className="text-center">
        Todo App
      </h1>

      <TaskModal />

      <TaskList />
    </Container>
  );
}

export default App;