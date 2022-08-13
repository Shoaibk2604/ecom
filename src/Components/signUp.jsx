import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Offer from "../Assets/offer1.jpg";
const Sign = (props) => {
  const signUp = (sign) => {
    sign.preventDefault();
    
  }
  return (
    <div className="page-sign">
    <div className="Signup-form d-flex justify-content-center">
      <div className="main-form">
        <div className="left-img">
          <img className="contain-img" src={Offer} alt=""  />
        </div>
        <div className="right-form">
          <form onSubmit={signUp}>
            <div className="text-center btn-Link">
              <p>Sign Up with : </p>
              <div className=" mb-2">
                <button className="btn btn-link btn-floating mx-1">
                  <FaGoogle />
                </button>
                <button className="btn btn-link btn-floating mx-1">
                  <FaFacebook />
                </button>
              </div>
            </div>
            <p className="text-center">Or create an account :</p>
            <div className="form-outline mb-3">
              <input
                type="text"
                name="fullusername"
                placeholder="Full Name"
                className="form-control"
                required
              />
            </div>
            <div className="form-outline mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
            <div className="mb-1">
              <input
                type="password"
                name="pswd"
                placeholder="Confirm Password"
                className="form-control"
                required
              />
            </div>
            <div className="d-flex mb-1 justify-content-between radio-terms">
              <div className="d-flex align-items-center check-rem">
                <input type="checkbox" name="remember" required id="remember"/>
                <label htmlFor="remember">
                  I accept the <a href="">Terms of Use </a>&
                  <a href=""> Privacy Policy.</a>
                </label>
              </div>
            </div>
            <div className="register-log">
            <button className="btn mt-1 mb-1 login-btn">Sign Up</button>
            <p>
              Already have an account? <Link to='/login'>Log in</Link>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Sign;
