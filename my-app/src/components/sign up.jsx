import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
//import { createGlobalStyle } from 'styled-components'
import { Person, Lock, Visibility, VisibilityOff } from '@mui/icons-material'



import userIcon from '../assets/user-icon.png'
import lockIcon from '../assets/lock-icon.png'
import eyeIcon from '../assets/eye-icon.png'
import hiddenEyeIcon from '../assets/hidden-eye-icon.png'
import bckgroundImg from '../assets/main-background.gif'

const GlobalStyles = css
    `
        *, *:before, *:after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            text-transform: uppercase;
        }
    `

const Container = styled.div
    `
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        color: white;
        text-shadow: 3px 2px 3px goldenrod;
        background: no-repeat url(${bckgroundImg});
        background-size: 100% 100%;
    `

const Form = styled.form
    `
        border: 5px inset goldenrod;
        min-width: 35vw;
        display: flex;
        flex-direction: column;
        margin: 15px auto;
        border-radius: 15px;
        background-color: black;
        opacity: 0.75;
        overflow: hidden;
        position: relative;
        box-shadow: 5px 5px 15px goldenrod;
    `

const Title = styled.h1
    `
        text-align: center;
        font-size: 26px;
        margin: 25px 0;
    `

const InputBlock = styled.div
    `
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        padding-left: 50px;
    `

const Wrapper = styled.div
    `
        position: relative;
        display: flex;
        width: 80%;
        flex-grow: 2;

        &:hover input, input[type='text']:focus, input[type='password']:focus {
            border-color: goldenrod;
        }
    `

const FlexLogin = styled.div
    `
        margin: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `

const Label = styled.label
    `
        display: inline-block;
        font-size: 16px;
        margin-bottom: 5px;
    `

const Input = styled.input
    `
        width: 100%;
        background-color: grey;
        font-size: 16px;
        border: 3px inset grey;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
        line-height: 100%;

        &.form-info {
            height: 30px;
            border-radius: 7.5px;
        }

        &.indent {
            text-indent: 35px;
        }

        &[type='submit'] {
            color: white;
            text-shadow: 2px 2px 2px goldenrod, -2px 2px 3px black;
            font-size: 20px;
            height: 60px;
            background-color: black;
            border: 3px inset goldenrod;
            margin-bottom: 0;
        }

        &[type='submit']:hover {
            text-shadow: 3px 3px 3px black;
            font-size: 24px;
            transform: scale(1.05);
            background-color: goldenrod;
            border: 5px inset goldenrod;
        }
    `

const LinkLogin = styled.div
    `
        width: 45px;
        height: 45px;
        background: radial-gradient(rgb(201, 168, 25), rgb(207, 150, 4));
        margin: 10px 0;
        border-radius: 50%;
        -webkit-transition: 0.5s;
        transition: 0.5s;

        &:hover {
            box-shadow: 2px 2px black, 2px 2px 12px white;
        };
    `

const Icon = styled.button
    `    
        background-color: transparent;
        border: none;

        &.left {
            position: absolute;
            top: 3px;
            left: 5px;
        }

        &.right {
            position: absolute;
            top: 3px;
            right: 5px;
        }
    `

const Img = styled.img
    `
        width: 25px;
        height: 25px;
    `

const Submit = styled.div
    `
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 35px;
    `

function signUp() {
  return (
    <>
        <Global styles={GlobalStyles} />
        <Container>
            <Form>
                <Title>CREATE ACCOUNT</Title>
                <InputBlock> 
                    <Label for='fname'>First name</Label>
                    <Wrapper>
                        <Input type='text' id='fname' name='fname' className='form-info'/>
                    </Wrapper>
                </InputBlock>

                <InputBlock>
                    <Label for="lname">Last name</Label>
                    <Wrapper>
                        <Input type='text' id='lname' name='lname' className='form-info' />
                    </Wrapper>
                </InputBlock>

                <InputBlock>
                    <Label for='username'>Username</Label>
                    <Wrapper>
                        <Input type='text' id='username' name='username' className='form-info indent' />
                        
                        <Icon className='icon left'>
                            <Img className='user-logo' src={userIcon} alt='User Icon' />
                        </Icon>
                        
                    </Wrapper>
                </InputBlock>

                <InputBlock>
                    <Label for='password'>Password</Label>
                    <Wrapper>
                        <Input type='password' id='password' name='password' className='form-info indent' />
                        <Icon className='icon left'>
                            <Img className='lock-logo' src={lockIcon} alt='Lock Icon' />
                        </Icon>
                        <Icon className='icon right'>
                            <Img className='seek' src={hiddenEyeIcon} alt='Hidden Eye Icon' />
                        </Icon>
                    </Wrapper>
                </InputBlock>

                <InputBlock>
                    <Label for='check-password'>Retype Your Password</Label>
                    <Wrapper>
                        <Input type='password' id='check-password' name='password' className='form-info indent' />
                        <Icon className='icon left'>
                            <Img className='lock-logo' src={lockIcon} alt='Lock Icon' />
                        </Icon>
                        <Icon className='icon right'>
                            <Img className='seek' src={hiddenEyeIcon} alt='Hidden Eye Icon' />
                        </Icon>
                    </Wrapper>
                </InputBlock>

                {/*<p><a href='#'>Forgot Password?</a></p>*/}
                {/* <FlexLogin>
                    <LinkLogin></LinkLogin>
                    <LinkLogin></LinkLogin>
                    <LinkLogin></LinkLogin>
                </FlexLogin> */}
                {/*<p><a href='#' className='sign-up'>Sign Up?</a></p>*/}

                <Submit>
                    <Input type="submit" value="Sign Up?" className='form-info' />
                </Submit>
            </Form>
        </Container>
    </>
  )
}

// class PwdElem extends HTMLInputElement {
//     constructor() {
//         super()
//         this.attachShadow({ mode: 'open' })
//         this.shadowRoot.getElementById('password').addEventListener('input', this.handleClick.bind(this))
//   }
    
// }

// customElements.define('my-password', PwdElem)

// const pswdElem = document.getElementById('password')
// pswdElem.addEventListener('input', function(e) {
//     console.log(e.target.value)
// })
// console.log(pswdElem)
// console.log(pswdElem.value || 'empty')
//pswdElem.addEventListener('input', () => console.log(this.value))
// let checkPswdElem = document.getElementById('check-password')
// checkPswdElem.addEventListener('input', passwordMatch)
export default signUp