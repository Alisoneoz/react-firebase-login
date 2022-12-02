import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export function Register() {

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const { signUp } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => 
    setUser({...user, [name]: value})
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(user.email, user.password);
      navigate('/')
    } catch (error){
      setError(error.message);
      console.error(error.message);
    }
  }

  return (
    <div>
      { error && <p> {error} </p>}
      
      <form onSubmit={handleSubmit}>
      <label htmlFor='email'>Email</label>
        <input 
          type='text' 
          name='email' 
          placeholder='youremail@company.com' 
          onChange={handleChange}/>
      
        <label>Password</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          onChange={ handleChange}/>

        <button>Register</button>
      </form>
    </div>
  )
}
