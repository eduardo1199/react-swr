import { useNavigate } from 'react-router-dom'
import { CardPost } from './styles'
import { formattedDistance } from '../../utils/formatted-date'

interface PostProps {
  title: string
  datePosted: string
  about: string
  issueNumber: number
}

export function Post({ about,datePosted, title, issueNumber }: PostProps) {
  const navigate = useNavigate()

  function handleNavigateToRepo() {
    navigate(`/issues/${issueNumber}`)
  }

  const distance = formattedDistance(datePosted)

  return (
    <CardPost onClick={() => handleNavigateToRepo()}>
      <div>
        <h1>
          {title}
        </h1>
        <span>
          Há {distance}
        </span>
      </div>
      <p>
        {about}
      </p>
    </CardPost>
  )
}