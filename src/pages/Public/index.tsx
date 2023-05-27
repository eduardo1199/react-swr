import { Container, ImageContainer, Content } from './styles.ts'

import Cover from '../../assets/cover.png'
import { Share } from 'phosphor-react'

export function Public() {
  return (
    <Container>
      <ImageContainer>
        <img src={Cover} alt="GitHub Blog" />
      </ImageContainer>

      <Content>
        <div>
          <img src="" alt="" />

          <div>
            <div>
              <strong>Cameron Williamson</strong>
              <Share />
            </div>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <div></div>
          </div>
        </div>
      </Content>
    </Container>
  )
}