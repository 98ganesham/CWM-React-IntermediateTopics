import { useReducer } from 'react';
import './App.css';
import authReducer from './state-management/reducers/authReducer';
import tasksReducer from './state-management/reducers/tasksReducer';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';
import AuthProvider from './state-management/AuthProvider';


function App() {
   const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  
  
  return (
    
      <AuthProvider>
        <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthProvider>
    
  );

  
  
        
}

export default App;
