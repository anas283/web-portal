import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GuardedRoute from './GuardedRoute';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='' element={<GuardedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>    
    </>
  );
}

export default App;
