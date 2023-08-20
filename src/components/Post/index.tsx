import { useNavigate } from 'react-router-dom'
import { CardPost } from './styles'

interface PostProps {
  title: string
  datePosted: string
  about: string
  url: string
}

export function Post({ about,datePosted, title, url }: PostProps) {
  const navigate = useNavigate()

  function handleNavigateToRepo() {
    navigate(url)
  }

  return (
    <CardPost onClick={() => handleNavigateToRepo()}>
      <div>
        <h1>
          {title}
        </h1>
        <span>
          {datePosted}
        </span>
      </div>
      <p>
        {about}
      </p>
    </CardPost>
  )
}