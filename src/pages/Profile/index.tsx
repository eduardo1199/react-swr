import { useEffect, useState } from "react"

import { useParams } from 'react-router-dom'
import { Profile } from "../../App"

export function ProfileView() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3333/users/${id}`).then((response) =>
      response.json().then((responseJson) => {
        setProfile(responseJson)
      })
    )
  }, [id])

  console.log(profile)

  return (
    <ul>
      <li>{profile.name}</li>
      <li>{profile.course}</li>
    </ul>
  )
}