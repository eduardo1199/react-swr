import { Container, ImageContainer, Content, Profile, ProfileInfo, CarrouselGit, InputPublic, GridContainer } from './styles.ts'

import Cover from '../../assets/cover.png'
import { GithubLogo, Package, Share, Users } from 'phosphor-react'

import { Post } from '../../components/Post'
import { useUserFetch } from '../../api/useUserFetch.ts'


export function Public() {
  const { user, isLoading } = useUserFetch({ username: 'eduardo1199' })

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
        <InputPublic>
          <div>
            <h1>Publicações</h1>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder='Buscar conteúdo' />
        </InputPublic>
        <GridContainer>
          <Post 
            about='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
            datePosted='Há 1 dia'
            title='JavaScript data types and data structures'
          />
          <Post 
            about='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
            datePosted='Há 1 dia'
            title='JavaScript data types and data structures'
          />
          <Post 
            about='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
            datePosted='Há 1 dia'
            title='JavaScript data types and data structures'
          />
          <Post 
            about='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
            datePosted='Há 1 dia'
            title='JavaScript data types and data structures'
          />
          <Post 
            about='Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in'
            datePosted='Há 1 dia'
            title='JavaScript data types and data structures'
          />
        </GridContainer>
      </Content>
    </Container>
  )
}