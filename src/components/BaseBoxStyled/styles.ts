import styled from "styled-components";

export const BaseBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${props => props.theme["base-profile"]};

  position: relative;

  padding: 2.5rem 2rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`