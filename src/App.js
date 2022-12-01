import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AuthProvider } from "./components/context/authContext"

function App() {
  return (
    <div className='bg-fuchsia-900 text-white h-screen'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={ <Login /> }></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
