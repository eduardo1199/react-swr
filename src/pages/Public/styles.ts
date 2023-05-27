import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: ${(props) => props.theme["base-background"]};
`

export const ImageContainer = styled.div`
  img {
    width: 100%;   
    object-fit: fill;
  }
`

export const Content = styled.div`
  max-width: 864px;

  margin: 0 auto;
`