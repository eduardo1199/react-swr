import { api } from "../lib/api";

export async function fetchGetUser(url: string) {
  try {
    const response = await api.get(url)

    return response.data
  } catch (e) {
    throw new Error('Error na busca do usuáario')
  }
}