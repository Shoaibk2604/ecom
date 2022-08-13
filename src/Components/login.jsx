import { FaFacebook, FaGoogle } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Loginpage = (props) => {
  const logInForm = (log) => {
    log.preventDefault();
  }
  return (
    <div className="page-sign">
    <div className="login-contain">
      <div className="signup ">
        <form onSubmit={logInForm}>
          <div className="text-center btn-Link">
            <p>Log in with : </p>
            <div className=" mb-2">
            <button className="btn btn-link btn-floating mx-1">
                <FaGoogle />
            </button>
            <button className="btn btn-link btn-floating mx-1">
              <FaFacebook />
            </button>
            </div>
          </div>
          <p className="text-center">Or</p>
          <div className="form-outline mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <div className="mb-1">
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              className="form-control"
              required
            />
          </div>
          <div className="d-flex mb-1 justify-content-between radio-terms">
            <div className="d-flex align-items-center check-rem">
              <input type="checkbox" name="" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="">
              Forget Password?
            </a>
          </div>
          <div className="register-log">
            <div className="btn-login-full">
            <button className="btn mt-1 mb-1 login-btn">Login</button>
            <button className="btn mb-1 login-btn">Login as Guest</button>
            </div>
            <p>
              Don't have an account? <Link to="/signup">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Loginpage;
