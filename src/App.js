import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <div className='bg-fuchsia-900 h-screen'>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={ <Login /> }></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
