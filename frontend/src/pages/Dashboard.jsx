import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/dashboard', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(() => {
        setUser(null)
      })
  }, [])

  if (!user) return <h2>Please login to view dashboard</h2>

  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </>
  )
}

