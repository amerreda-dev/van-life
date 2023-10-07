import { useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { loginUser } from '../api'
export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)
  const nav = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/host'

  console.log(location)
  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    loginUser(loginFormData)
      .then(data => {
        localStorage.setItem('loggedin', true)

        nav(from, { replace: true })
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setStatus('idle')
      })
  }

  function handleChange(e) {
    const { name, value } = e.target
    setLoginFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="login-container">
      {location.state?.message ? (
        <h3 className="login-error">{location.state.message}</h3>
      ) : (
        ''
      )}
      <h1>Sign in to your account</h1>
      {error?.message && <h3 className="login-error">{error.message}</h3>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Logging in...' : 'Log in'}
        </button>
      </form>
    </div>
  )
}
