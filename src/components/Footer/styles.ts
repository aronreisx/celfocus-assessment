import styled from 'styled-components';

export const FooterBar = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;

  .social {
    display: flex;
    justify-content: center;

    a + a{
      margin-left: 1.6875rem;
    }
  }

  .author {
    display: flex;
    justify-content: center;

    margin: 0 auto;
    margin-top: 15px;

    max-width: 120px;

    text-decoration: none;
    color: var(--text);

    span{
      display: inline-block;
      font-weight: 600;
      margin-left:0.1875rem;
    }
  }
`
