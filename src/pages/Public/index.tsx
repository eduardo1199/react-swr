import { Container, ImageContainer, Content, Profile, ProfileInfo, CarrouselGit } from './styles.ts'

import Cover from '../../assets/cover.png'
import { GithubLogo, Package, Share, Users } from 'phosphor-react'

import { useUserFetch } from '../../api/useUserFetch.ts'
import { ContentPublic } from './ContentPublic/index.tsx'

interface UserFetchResponse {
  name: string
  bio: string
  followers: number
  public_repos: number
  avatar_url: string
}


export function Public() {
  const { user, isLoading } = useUserFetch<UserFetchResponse>({ username: 'eduardo1199' })

  if(isLoading || !user) {
    return 'Carregando...'
  }

  return (
    <Container>
      <ImageContainer>
        <img src={Cover} alt="GitHub Blog" />
      </ImageContainer>

      <Content>
        <Profile>
          <img src={user.avatar_url} alt="" />

          <ProfileInfo>
            <strong>{user.name}</strong>
            <a href="https://github.com/eduardo1199" target="_blank">
              GITHUB
              <Share />
            </a>
            <p>
            {user.bio}
            </p>
            <CarrouselGit>
              <div>
                <GithubLogo />
                <span>{user.name}</span>
              </div>
              <div>
                <Users />
                <span>{user.followers} seguidos</span>
              </div>
              <div>
                <Package />
                <span>{user.public_repos} repositórios</span>
              </div>
            </CarrouselGit>
          </ProfileInfo>
        </Profile>
        
        <ContentPublic />
      </Content>
    </Container>
  )
}