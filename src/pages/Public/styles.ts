import { BaseBoxContainer } from "../../components/BaseBoxStyled/styles";

import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;

  background: ${(props) => props.theme["base-background"]};
`

export const ImageContainer = styled.div`
  img {
    width: 100%;
    min-height: 300px;
    object-fit: cover;
  }
`

export const Content = styled.div`
  max-width: calc(864px + 4rem);
  padding: 0 2rem;

  margin: 0 auto;
`

export const Profile = styled(BaseBoxContainer)`
  display: flex;
  gap: 2rem;

  img {
    max-width: 148px;
    max-height: 148px;

    border-radius: 8px;
  }

  margin-top: -6rem;
`

export const ProfileInfo = styled.div`
  height: 100%;

  display: flex;
  align-items: flex-start;
  
  flex-direction: column;

  strong {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
    color: ${props => props.theme["base-text"]};

    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  a {
    position: absolute;
    top: 40px;
    right: 32px;

    color: ${props => props.theme["blue"]};
    font-size: 0.75rem;
    font-weight: bold;
  } 
`

export const CarrouselGit = styled.div`
  display: flex;
  align-items: center;

  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${props => props.theme['base-subtitle']};

    svg {
      color: ${props => props.theme['base-span']};
    }
  }
`
export const InputPublic = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 4.5rem;
  margin-bottom: 3rem;

  gap: 0.875rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-weight: bold;
      font-size: 1.125rem;
      color: ${props => props.theme["base-subtitle"]};
    }

    span {
      color: ${props => props.theme["base-span"]};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }

  input {
    padding: 0.75rem 1rem;

    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: 400;

    ::placeholder {
      color: ${props => props.theme["base-label"]};
    }

    background: ${props => props.theme["base-input"]};
    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-border"]};
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  grid-gap: 1.8rem;

  margin-bottom: 10rem;
`
