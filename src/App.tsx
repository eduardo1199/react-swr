import { useEffect, useState } from "react"

import { useNavigate } from 'react-router-dom'

export type Profile =  {
  id: string;
  name: string;
  course: string;
}

function App() {
  const [profiles, setProfiles] = useState<Profile[]>([])

  const navigator = useNavigate()

  useEffect(() => {
    fetch('http://localhost:3333/users').then((response) => {
      response.json().then((jsonResponse) => {
        setProfiles(jsonResponse)
      })
    })
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {profiles.map((profile) => {
        return (
          <button key={profile.id} onClick={() => navigator(`/profile/${profile.id}`)}>{profile.name}</button>
        )
      })}
    </div>
  )
}

export default App
