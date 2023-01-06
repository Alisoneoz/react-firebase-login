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
    setError('')
    try {
      await signUp(user.email, user.password);
    } catch (err){
      setError(err.message);
      console.error(err.message);
    }
    navigate('/')
  }

  return (
    <div>
      { error && <p> {error} </p>}
      <form onSubmit={handleSubmit} >
        <div className="email">
          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            name='email' 
            placeholder='youremail@company.com' 
            onChange={handleChange}/>
        </div>
      
        <label>Password</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          onChange={ handleChange}
          placeholder='******'/>

        <button>Register</button>
      </form>
    </div>
  )
}
