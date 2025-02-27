import userIcon from '../assets/user-icon.png'
import lockIcon from '../assets/lock-icon.png'
import eyeIcon from '../assets/eye-icon.png'
import hiddenEyeIcon from '../assets/hidden-eye-icon.png'
import './authenticate.css'

function signUp() {
  return (
    <div className="container">
        <form>
            <h1 className="title">CREATE ACCOUNT</h1>
            <div className='input-block'> 
                <label for='fname'>First name</label>
                <div className='wrapper'>
                    <input type='text' id='fname' name='fname' className='form-info'/>
                </div>
            </div>

            <div className='input-block'>
                <label for="lname">Last name</label>
                <div className='wrapper'>
                    <input type='text' id='lname' name='lname' className='form-info'/>
                </div>
            </div>

            <div className='input-block'>
                <label for='username'>Username</label>
                <div className='wrapper'>
                    <input type='text' id='username' name='username' className='form-info indent'></input>
                    <div className='icon left'>
                        <img className='user-logo' src={userIcon} alt='User Icon' />
                    </div>
                </div>
            </div>

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

            <div className='input-block'>
                <label for='check-password'>Retype Your Password</label>
                <div className='wrapper'>
                    <input type='password' id='check-password' name='password' className='form-info indent'></input>
                    <div className='icon left'>
                        <img className='lock-logo' src={lockIcon} alt='Lock Icon' />
                    </div>
                    <div className='icon right'>
                        <img className='seek' src={hiddenEyeIcon} alt='Hidden Eye Icon' />
                    </div>
                </div>
            </div>

            {/*<p><a href='#'>Forgot Password?</a></p>*/}
            <div className='flex-login'>
            <div className='link-login'></div>
            <div className='link-login'></div>
            <div className='link-login'></div>
            </div>
            {/*<p><a href='#' className='sign-up'>Sign Up?</a></p>*/}

            <div className="btn">
                <input type="submit" value="Sign Up?" className='form-info'/>
            </div>
        </form>
    </div>
  )
}
export default signUp