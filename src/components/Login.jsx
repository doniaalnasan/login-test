import Styles from './Auth/login.module.css'

function Login() {
return (

<div className={Styles.logincontainer}>
    <div className={Styles.logincard}>
        <p>Welcome back! Please login to your account.</p>
        <h1>Login</h1>
<form >

        <div className={Styles.formgroup}>

            <label>Email</label>
            <input type= "email" placeholder="Enter your Email "></input> 
        </div>

        <div className={Styles.formgroup}>

            <label>Password</label>
            <input type= "password" placeholder="Enter your Password "></input> 

        </div>
        <button type="submit">Login</button>
</form>

        <div className={Styles.authlink}>
            <a href="#">create account</a>
            <a href="#">forgot password?</a>
        </div>
    </div>
</div>



)

}

export default Login;