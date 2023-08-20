# SWR

## Projeto voltado para estudo da implementação de requisições via SWR. Uso de data fetching para requisição com ReactJS, Typescript e SWR.

## SRW hook

Foi criado um hook fetch usando axios como api. Nesse exemplo criei  um use case fetchGetUser que busca os dados do usuário de acordo com URL de busca. o useSRW faz o fetch usando essa função e retorna os dados de usuário. 

<aside>
💡 fetch api abaixo, use caso.

</aside>

```
import { api } from "../lib/api";

export async function fetchGetUser(url: string) {
  try {
    const response = await api.get(url)

    return response.data
  } catch (e) {
    throw new Error('Error na busca do usuáario')
  }
}
```

<aside>
💡 useUserFetch usando SRW.

</aside>

```
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
```