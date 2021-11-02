import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  color: var(--white);
  background: var(--theme-color);
  border: 0;
  padding: 0 1.25rem 0 1rem;
  border-radius: var(--theme-border-radius);
  height: 3rem;
  @media(max-width: 500px) { height:4.625rem; }


  transition: filter 0.2s ease;

  &:hover{
    filter: brightness(0.9);
  }

  span {
    margin-left: 0.5rem;
  }
`
