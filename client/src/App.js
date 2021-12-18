import logo from './logo.svg';
import './App.css';

import SignIn from './components/signIn';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
