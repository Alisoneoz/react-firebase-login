import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export function Login() {

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const [userError, setUserError]= useState("");
  const [passwordError, setPasswordError]= useState("");

  const { logIn } = useAuth();
  const navigate = useNavigate();



  const handleChange = ({ target: { name, value } }) => 
    setUser({...user, [name]: value})
  




  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await logIn(user.email, user.password);
      navigate('/')
    } catch (error){
      setError(error.message);
      console.error(error.message);
    }
  }



  return (
    <div>
      { error && <p> {error} </p>}
      <form onSubmit={handleSubmit} className="mx-auto flex justify-center text-center">
      <label htmlFor='email'>Email</label>
        <input 
          type='email' 
          name='email' 
          placeholder='youremail@company.com' 
          onChange={handleChange}/>
      
        <label>Password</label>
        <input 
          type='password' 
          name='password' 
          id='password' 
          onChange={handleChange}
          placeholder='******'/>

        <button>Login</button>
      </form>
    </div>
  )
}
