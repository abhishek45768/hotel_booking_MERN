import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:3001/Login", { email, password })
      .then((result) => {
        console.log(result)
        if (result.data === "success") {
          alert("Login Successful"); // Debugging statement
          navigate("/Home")
        } 
      })
      .catch((err) => {
        console.error("Error:", err); // Log any errors for debugging
      });
  };

  const mystyle = {
    color: "blue",
  };

  return (
    <>
      <form className="loginpage" onSubmit={handleSubmit}>
        <table>
          <div >
            <div className="logincontainer">
              <h1 className="loginform">Login</h1>
              <label className="usernamelogin">Email:</label>
              <input
                type="email"
                className="input1"
                autoComplete="off"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="password">PASSWORD:</label>
              <input
                type="password"
                className="input2"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="submit" type="submit">LOGIN</button>
              <div className="regis">
                Don't have an account?
                <Link to="/Register" style={mystyle}>
                  Create your account!
                </Link>
              </div>
            </div>
          </div>
        </table>
      </form>
    </>
  );
}

export default Login;
