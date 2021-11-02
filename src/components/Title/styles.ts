import styled from 'styled-components';

export const Container = styled.section`
  @media(max-width: 720px)
  {
    padding-left: 2vw;
    padding-right: 2vw;
  }

  display: flex;
  justify-content: space-between;

  max-width: 625px;
  margin: 0 auto;
  padding-top: 3.625rem;
  padding-bottom: 2.25rem;

  h1{
    color: var(--title);
    font-size: 2rem;
    @media(max-width: 500px){ font-size: 1.75rem; }
  }
`
