import { fetchIssues } from '../cases/fetchIssues'

import useSWR from 'swr'

export function useIssueFetch<T>(q?: string) {
  const { data: issues , error, isLoading } = useSWR<T, string>(`/search/issues?q=${q}`, fetchIssues)

  return {
    issues,
    error,
    isLoading
  }
}