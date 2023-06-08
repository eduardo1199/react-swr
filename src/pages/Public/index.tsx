import { Container, ImageContainer, Content, Profile, ProfileInfo, CarrouselGit, InputPublic, GridContainer } from './styles.ts'

import Cover from '../../assets/cover.png'
import { GithubLogo, Share, Users } from 'phosphor-react'

import { Post } from '../../components/Post'

export function Public() {
  return (
    <Container>
      <ImageContainer>
        <img src={Cover} alt="GitHub Blog" />
      </ImageContainer>

      <Content>
        <Profile>
          <img src="https://github.com/eduardo1199.png" alt="" />

          <ProfileInfo>
            <strong>Eduardo Soares</strong>
            <a href="https://github.com/eduardo1199" target="_blank">
              GITHUB
              <Share />
            </a>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
            <CarrouselGit>
              <div>
                <GithubLogo />
                <span>Eduardo</span>
              </div>
              <div>
                <Users />
                <span>32 seguidos</span>
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