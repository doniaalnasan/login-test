import Styles from './Auth/login.module.css'
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
return ( 

<div className={Styles.logincontainer}>
    <div className={Styles.logincard}>

        <h1>Login</h1>
        <p>Login to access your travelwise account.</p>
        
<form >
    <div className={Styles.inputGroup}>
        <div className={Styles.inputSingle}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />
        </div>

        <div className={Styles.inputSingle}>
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        </div>
    </div>
        <div className={Styles.checkboxGroup}>
            <div className={Styles.remember}>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <div className={Styles.authlink}>
                <a href="#">forgot password</a>
            </div>
        </div>
        <button type="submit" className={Styles.btLogin}>Login</button>
</form>

        <div className={Styles.registrationlink}>
            <p>Don't have an account?</p>
            <a href="#">Sign up</a>
        </div>

        

            <div className={Styles.divider}>
                <span></span>
                <p>Or login with</p>
                <span></span>
            </div>

            <div className={Styles.socialLogin}>

                <button className={Styles.socialBtn}>
                    <FaFacebook size={18} color="#1877F2" />
                </button>

                <button className={Styles.socialBtn} >
                    <FcGoogle size={18} />
                </button>

                <button className={Styles.socialBtn} >
                    <FaApple size={18} color="#000000" />
                </button>

            </div>
        
    </div>
</div>



)

}

export default Login;