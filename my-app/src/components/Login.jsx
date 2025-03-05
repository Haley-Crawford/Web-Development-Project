import userIcon from '../assets/user-icon.png'
import lockIcon from '../assets/lock-icon.png'
import eyeIcon from '../assets/eye-icon.png'
import hiddenEyeIcon from '../assets/hidden-eye-icon.png'
//import './authenticate.css'

function Login() {
  return (
    <div className='container'>
      <form>
        <h1 className="title">Login</h1>
        <div className='input-block'>
            <label for='username'>Username</label>
            <div className='wrapper'>
                <input type='text' id='username' name='username' className='form-info indent'></input>
                <div className='icon left'>
                    <img className='user-logo' src={userIcon} alt='User Icon' />
                </div>
            </div>
        </div>

        <a href="#" className="link">Forgot Username?</a>

        <div className='input-block'>
            <label for='password'>Password</label>
            <div className='wrapper'>
                <input type='password' id='password' name='password' className='form-info indent'></input>
                <div className='icon left'>
                    <img className='lock-logo' src={lockIcon} alt='Lock Icon' />
                </div>
                <div className='icon right'>
                    <img className='seek' src={hiddenEyeIcon} alt='Hidden Eye Icon' />
                </div>
            </div>
        </div>

        <a href="#" className="link">Forgot Password?</a>

        {/*<p><a href='#'>Forgot Password?</a></p>*/}
        <div className='flex-login'>
          <div className='link-login'></div>
          <div className='link-login'></div>
          <div className='link-login'></div>
        </div>
        {/*<p><a href='#' className='sign-up'>Sign Up?</a></p>*/}

        <div className="btn">
            <input type="submit" value="Log In" className='form-info log-in'/>
        </div>

        <a href="#" className="link sign-up">Sign Up?</a>

      </form>
    </div>
  )
}
export default Login