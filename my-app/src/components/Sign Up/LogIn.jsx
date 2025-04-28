import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import styles from './SignUp.module.css'
import Modal from 'react-modal'
import { signInWithEmail } from '../../firebase'; // You'll need to create this function
import { useAuth } from '../../AuthProvider'

Modal.setAppElement('#root')

export function LogIn({ isOpen, onClose, signUpToggle }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [authError, setAuthError] = useState(null)

    const signUpSwitch = () => {
        onClose()
        signUpToggle()
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'

        if (!formData.password) newErrors.password = 'Password is required'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => { 
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
        setErrors({...errors, [name]: undefined})
        setAuthError(null) // Clear auth errors when user starts typing again
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            try {
                await signInWithEmail(formData.email, formData.password)
                onClose() // Close modal on successful login
            } catch (error) {
                // Handle Firebase auth errors
                setAuthError(error.message)
            }
        }
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    return (    
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Login Modal"
            className={styles.Modal__Content}
            overlayClassName={styles.Modal__Overlay}
        >
            <div className={styles.container}>
                <div className={styles.form_wrapper}>
                    <div className={styles.form_content}>
                        <h1>Welcome Back</h1>
                        <p className={styles.subtitle}>Log in to your account</p>
                        <button className={styles.exit} onClick={onClose}>X</button>
                        {authError && <p className={styles.auth_error}>{authError}</p>}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.group}>
                                <label htmlFor='email'>Email Address</label>
                                <div className={styles.wrapper}>
                                    <Mail size={18} className={styles.icon} />
                                    <input 
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='Enter your email'
                                        className={errors.email ? styles.error : ''}
                                    />
                                </div>
                                {errors.email && <p className={styles.err_msg}>{errors.email}</p>}
                            </div>
                            <div className={styles.group}>
                                <label htmlFor='password'>Password</label>
                                <div className={styles.wrapper}>
                                    <Lock size={18} className={styles.icon} />
                                    <input 
                                        type={showPassword ? 'text' : 'password'}
                                        id='password'
                                        name='password'
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder='Enter your password'
                                        className={errors.password ? styles.error : ''}
                                    />
                                    <button
                                        type='button'
                                        className={styles.toggle_password}
                                        onClick={togglePassword}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                                    </button>
                                </div>
                                {errors.password && <p className={styles.err_msg}>{errors.password}</p>}
                            </div>
                            <button type='submit' className={styles.btn}>Log In</button>
                        </form>
                        <p className={styles.form_footer}>Don't have an account? <a href='#' onClick={signUpSwitch}>Sign up</a></p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}