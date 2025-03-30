import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

import {GlobalStyles, Container, Form, Title, InputBlock, Wrapper, Label, Input, Icon, Img, Submit} from '../authentication.jsx'

import bckgroundImg from '../assets/main-background.gif'
import userIcon from '../assets/user-icon.png'
import lockIcon from '../assets/lock-icon.png'
import eyeIcon from '../assets/eye-icon.png'
import hiddenEyeIcon from '../assets/hidden-eye-icon.png'

// const GlobalStyles = css
//   `
//       *, *:before, *:after {
//           padding: 0;
//           margin: 0;
//           box-sizing: border-box;
//           text-transform: uppercase;
//       }
//   `

// const Container = styled.div
//   `
//       position: absolute;
//       width: 100vw;
//       height: 100vh;
//       display: flex;
//       justify-content: center;
//       color: white;
//       text-shadow: 3px 2px 3px goldenrod;
//       background: no-repeat url(${bckgroundImg});
//       background-size: 100% 100%;
//   `

// const Form = styled.form
//   `
//       border: 5px inset goldenrod;
//       min-width: 35vw;
//       display: flex;
//       flex-direction: column;
//       margin: 15px auto;
//       border-radius: 15px;
//       background-color: black;
//       opacity: 0.75;
//       overflow: hidden;
//       position: relative;
//       box-shadow: 5px 5px 15px goldenrod;
//   `

// const Title = styled.h1
//   `
//       text-align: center;
//       font-size: 26px;
//       margin: 25px 0;
//   `

// const InputBlock = styled.div
//   `
//       display: flex;
//       flex-direction: column;
//       margin: 15px 0;
//       padding-left: 50px;
//   `

// const Wrapper = styled.div
//   `
//       position: relative;
//       display: flex;
//       width: 80%;
//       flex-grow: 2;

//       &:hover input, input[type='text']:focus, input[type='password']:focus {
//           border-color: goldenrod;
//       }
//   `

// const Input = styled.input
//   `
//       width: 100%;
//       background-color: grey;
//       font-size: 16px;
//       border: 3px inset grey;
//       -webkit-transition: 0.5s;
//       transition: 0.5s;
//       outline: none;
//       line-height: 100%;

//       &.form-info {
//           height: 30px;
//           border-radius: 7.5px;
//       }

//       &.indent {
//           text-indent: 35px;
//       }

//       &[type='submit'] {
//           color: white;
//           text-shadow: 2px 2px 2px goldenrod, -2px 2px 3px black;
//           font-size: 20px;
//           height: 60px;
//           background-color: black;
//           border: 3px inset goldenrod;
//           margin-bottom: 0;
//       }

//       &[type='submit']:hover {
//           text-shadow: 3px 3px 3px black;
//           font-size: 24px;
//           transform: scale(1.05);
//           background-color: goldenrod;
//           border: 5px inset goldenrod;
//       }
//   `

function Login() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Form>
          <Title>Login</Title>
          <InputBlock>
              <Label for='username'>Username</Label>
              <Wrapper>
                  <Input type='text' id='username' name='username' className='form-info indent'/>
                  <div className='icon left'>
                      <img className='user-logo' src={userIcon} alt='User Icon' />
                  </div>
              </Wrapper>
          </InputBlock>

          <a href="#" className="link">Forgot Username?</a>

          <InputBlock>
              <Label for='password'>Password</Label>
              <Wrapper>
                  <Input type='password' id='password' name='password' className='form-info indent' />
                  <div className='icon left'>
                      <img className='lock-logo' src={lockIcon} alt='Lock Icon' />
                  </div>
                  <div className='icon right'>
                      <img className='seek' src={hiddenEyeIcon} alt='Hidden Eye Icon' />
                  </div>
              </Wrapper>
          </InputBlock>

          <a href="#" className="link">Forgot Password?</a>

          {/*<p><a href='#'>Forgot Password?</a></p>*/}
          <div className='flex-login'>
            <div className='link-login'></div>
            <div className='link-login'></div>
            <div className='link-login'></div>
          </div>
          {/*<p><a href='#' className='sign-up'>Sign Up?</a></p>*/}

          <div className="btn">
              <Input type="submit" value="Log In" className='form-info log-in'/>
          </div>

          <a href="#" className="link sign-up">Sign Up?</a>

        </Form>
      </Container>
    </>
  )
}
export default Login