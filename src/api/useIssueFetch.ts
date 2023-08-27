import { fetchIssues } from '../cases/fetchIssues'

import useSWR from 'swr'

interface UseIssueFetch {
  q?: string
  username: string
}

export function useIssueFetch<T>({ username, q }: UseIssueFetch) {
  const { data: issues , error, isLoading } = useSWR<T, string>(`/search/issues?q=${q}%20repo:${username}/react-swr`, fetchIssues)

  return {
    issues,
    error,
    isLoading
  }
}