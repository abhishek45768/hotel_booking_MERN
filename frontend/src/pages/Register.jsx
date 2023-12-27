import { useState } from 'react';
import axios from 'axios'; // Don't forget to import axios
import { useNavigate } from 'react-router-dom';
function RegisterForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRepassword] = useState();
  const navigate=useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/Register', { name, email, password, repassword })

      .then(result =>{ console.log(result)
      navigate('/Login')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='register'>
      <form onSubmit={handlesubmit}>
        <table>
          <div id="register-box" className="register-box">
            <div className="registerleft">
              <tr><td><h1>Register!</h1></td></tr>
              <tr><td><input
                type="text"
                name="name"
                placeholder="Username"
                autoComplete='off'
                className='username'
                required
                onChange={(e) => setName(e.target.value)}
              /></td></tr>
              <tr><td><input
                type="text"
                name="email"
                placeholder="E-mail"
                autoComplete='off'
                className='em'
                required
                onChange={(e) => setEmail(e.target.value)}
              /></td></tr>
              <tr><td><input
                type="password"
                id="p1"
                name="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              /></td></tr>
             <tr><td> <input
                type="password"
                id="p2"
                name="password2"
                placeholder="Retype password"
                required
                onChange={(e) => setRepassword(e.target.value)}/></td></tr>
              
              <tr><td><input type="submit" /></td></tr>
            </div>
            <div className="registerright">
          <span className="loginwith">Sign in with<br />social network</span>
          
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
          </div>
        </table>
      </form>
    </div>
  );
}

export default RegisterForm;
