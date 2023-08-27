import styled from "styled-components";

export const CardPost = styled.button`
  display: flex;

  flex-direction: column;

  border: none;
  border-radius: 10px;
  cursor: pointer;

  padding: 2rem;

  background: ${props => props.theme["base-post"]};
  border: 2px solid transparent;

  transition: all 0.4s;

  p {
    text-align: left;
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["base-text"]};
    line-height: 26px;
    word-break: break-all;
    hyphens: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 5rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    
    margin-bottom: 1.25rem;

    h1 {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
      text-align: start;
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  :hover {
    border: 2px solid ${props => props.theme['base-label']};
    box-shadow: 0 0 5px 5px ${props => props.theme['base-label']};
    transition: all 0.4s;
  }
  
  &:focus {
    box-shadow: 0 0 5px 5px ${props => props.theme['base-label']};
  }
`