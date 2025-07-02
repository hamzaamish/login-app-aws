import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    if (res.ok) {
      alert('Registration successful! Please login.')
      navigate('/login')
    } else {
      alert('Registration failed')
    }
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" required value={name}
               onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" required value={email}
               onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password}
               onChange={e => setPassword(e.target.value)} />
        <button>Register</button>
      </form>
    </>
  )
}

