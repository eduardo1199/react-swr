import { GridContainer, InputPublic } from "./styles"

import { Post } from '../../../components/Post'
import { useState } from "react"

import { useIssueFetch } from '../../../api/useIssueFetch.ts'

interface Issues {
  items: {
    title: string;
    body: string;
    url: string;
    created_at: string
  }[]
}

export function ContentPublic() {
  const [search, setSearch] = useState('')

  const { issues } = useIssueFetch<Issues>(search)


  return (
    <>
      <InputPublic>
          <div>
            <h1>Publicações</h1>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder='Buscar conteúdo' onChange={(e) => setSearch(e.target.value)} />
        </InputPublic>
        <GridContainer>
          {issues && issues.items.map((issue) => {
            return(
              <Post 
                about={issue.body}
                datePosted={issue.created_at}
                title={issue.title}
                url={issue.url}
              />
            )
          })}
        </GridContainer>
    </>
  )
}