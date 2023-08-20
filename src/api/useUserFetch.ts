import { fetchGetUser } from "../cases/fetchUser"

import useSWR from 'swr'

interface UseUserFetchProps {
  username: string
}


export function useUserFetch<T>({ username } : UseUserFetchProps) {
  const { data: user, error, isLoading } = useSWR<T, string>(`/users/${username}`, fetchGetUser)

  return {
    user,
    error,
    isLoading
  }
}