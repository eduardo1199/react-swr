import { fetchGetUser } from "../cases/fetchUser"

import useSWR from 'swr'

interface UseUserFetchProps {
  username: string
}

interface UserFetchResponse {
  name: string
  bio: string
  followers: number
  public_repos: number
  avatar_url: string
}

export function useUserFetch({ username } : UseUserFetchProps) {
  const { data: user, error, isLoading } = useSWR<UserFetchResponse, string>(`/users/${username}`, fetchGetUser)

  return {
    user,
    error,
    isLoading
  }
}