import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={ Home }></Route>
      <Route path='/login' element={ Login }></Route>
      <Route path='/register' element={Register}></Route>
    </Routes>
  );
}

export default App;
