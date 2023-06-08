import { CardPost } from './styles'

interface PostProps {
  title: string
  datePosted: string
  about: string
}

export function Post({ about,datePosted, title}: PostProps) {
  return (
    <CardPost>
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