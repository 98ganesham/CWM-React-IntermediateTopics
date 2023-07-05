import { useReducer } from 'react';
import './App.css';
import authReducer from './state-management/reducers/authReducer';
import tasksReducer from './state-management/reducers/tasksReducer';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/AuthProvider';
import TaskProvider from './state-management/TaskProvider';


function App() {
   
   
  
  return (
    
      <AuthProvider>
        <TaskProvider>
          <NavBar />
          <HomePage />
          </TaskProvider>
        </AuthProvider>
    
  );

  
  
        
}

export default App;
