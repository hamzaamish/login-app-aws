import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      navigate('/dashboard')
    } else {
      alert('Login failed')
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required value={email}
               onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password}
               onChange={e => setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </>
  )
}

