import styled from "styled-components"

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