import React, { useState } from 'react'
import { User2, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import styles from './SignUp.module.css'
import Modal from 'react-modal'
import { signUpWithEmail, signInWithGoogle } from '../../firebase'; 
import { useAuth } from '../../AuthProvider'

Modal.setAppElement('#root')

export function SignUp({ isOpen, onClose }) {
    const { currentUser } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        check_password: '',
    })

    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) newErrors.name = 'Name is required'

        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'

        if (!formData.password) newErrors.password = 'Password is required'
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    
        if (formData.password !== formData.check_password) newErrors.password_check = 'Passwords do not match'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => { 
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        setErrors({...errors, [name]: undefined})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()) {
            
            const user = await signUpWithEmail(formData.email, formData.password, formData.name);
            onClose()
        }
        console.log(errors)
    }

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    if (submitted) {
        return (
            <div>Success!</div>
        )
    }

  return (    
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
        className={styles.Modal__Content}
        overlayClassName={styles.Modal__Overlay}
    >
        <div className={styles.container}>
            <div className={styles.form_wrapper}>
                <div className={styles.form_content}>
                    <h1>Join Us</h1>
                    <p className={styles.subtitle}>Create your account</p>
                    <button className={styles.exit} onClick={onClose}>X</button>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor='name'>Full Name</label>
                            <div className={styles.wrapper}>
                                <User2 size={18} className={styles.icon} />
                                <input 
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your full name'
                                    className={errors.name ? styles.error : ''}
                                />
                            </div>
                            {errors.name && <p className={styles.err_msg}>{errors.name}</p>}
                        </div>
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
                                    placeholder='Create a password'
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
            
                            {formData.password && (
                                <div className={styles.password_strength}>
                                    <div className={`${styles.strength_bar} ${
                                        formData.password.length < 6
                                        ? 'weak'
                                        : (!/[A-Z][a-z][0-9][!@#$%^&*]/.test(formData.password))
                                            ? 'medium'
                                            : 'strong'
                                    }`}
                                    >
            
                                    </div>
                                    <span>
                                        {formData.password.length < 6
                                        ? 'Weak'
                                        : (!/[A-Z][a-z][0-9][!@#$%^&*]/.test(formData.password))
                                            ? 'Medium'
                                            : 'Strong'
                                        }
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className={styles.group}>
                            <label htmlFor='check_password'>Password</label>
                            <div className={styles.wrapper}>
                                <Lock size={18} className={styles.icon} />
                                <input 
                                    type={showPassword ? 'text' : 'password'}
                                    id='check_password'
                                    name='check_password'
                                    value={formData.check_password}
                                    onChange={handleChange}
                                    placeholder='Re-enter your password'
                                    className={errors.check_password ? styles.error : ''}
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
                            {errors.check_password && <p className={styles.err_msg}>{errors.check_password}</p>}
                        </div>
                        <button type='submit' className={styles.btn}>Create Account</button>
                    </form>
                    <p className={styles.form_footer}>Already have an account? <a href='#'>Sign in</a></p>
                </div>
            </div>
        </div>
    </Modal>
  )
}