import styled from "styled-components";

export const THead = styled.thead`
  th{
    color: var(--text);
    font-weight: 400;

    padding: 1rem 4rem;
    @media(max-width: 320px) { padding: 1rem 2rem; }

    text-align: left;
    line-height: 1.5rem;

    &:last-child {
      text-align: center;
    }
  }
`

