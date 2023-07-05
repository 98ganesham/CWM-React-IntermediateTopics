import { useReducer } from 'react';
import './App.css';
import authReducer from './state-management/reducers/authReducer';
import tasksReducer from './state-management/reducers/tasksReducer';
import AuthContext from './state-management/contexts/authContext';
import TasksContext from './state-management/contexts/tasksContext';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';


function App() {
   const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, authDispatch] = useReducer(authReducer, '');
  
  return (
    
      <AuthContext.Provider value={{user,  dispatch: authDispatch}}>
        <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </AuthContext.Provider>
    
  );

  
  
        
}

export default App;
