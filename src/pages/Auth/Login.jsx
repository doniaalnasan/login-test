import "../../styles/login.css";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
return ( 

<div className="logincontainer">
    <div className="logincard">

        <h1>Login</h1>
        <p>Login to access your travelwise account.</p>
        
<form >
    <div className="inputGroup">
        <div className="inputSingle">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        </div>

        <div className="inputSingle">
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        </div>
    </div>
        <div className="checkboxGroup">
            <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <div className="authlink">
                <a href="#">forgot password</a>
            </div>
        </div>
        <button type="submit" className="btLogin">Login</button>
</form>

        <div className="registrationlink">
            <p>Don't have an account?</p>
            <a href="#">Sign up</a>
        </div>

        

            <div className="divider">
                <span></span>
                <p>Or login with</p>
                <span></span>
            </div>

            <div className="socialLogin">

                <button className="socialBtn">
                    <FaFacebook size={18} color="#1877F2" />
                </button>

                <button className="socialBtn" >
                    <FcGoogle size={18} />
                </button>

                <button className="socialBtn" >
                    <FaApple size={18} color="#000000" />
                </button>

            </div>
        
    </div>
</div>



)

}

export default Login;