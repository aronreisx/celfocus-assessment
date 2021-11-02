import styled from 'styled-components'

export const TBody = styled.tbody`
  tr {
    cursor: pointer;
    transition: filter 0.2s ease;

    &:hover{
      filter: brightness(0.9);
    }
  }

  td {
    padding: 1rem 0;
    border: 0;
    background: var(--white);
    color: var(--text);

    &:first-child{
      border-top-left-radius: var(--theme-border-radius);
      border-bottom-left-radius: var(--theme-border-radius);

      color: var(--title);

      padding-left: 4rem;
      @media(max-width: 320px) { padding-left: 0.5rem; }
      @media(min-width: 320px) and (max-width: 420px) { padding-left: 2rem; }
    }

    &:last-child {
      border-top-right-radius: var(--theme-border-radius);
      border-bottom-right-radius: var(--theme-border-radius);

      padding-right: 4rem;
      @media(max-width: 320px) { padding-right: 0.5rem; }
      @media(min-width: 320px) and (max-width: 420px) { padding-right: 2rem; }

      display: flex;
      justify-content: end;

      text-align:right;
      text-transform: capitalize;
    }

    .data-icons {
      margin-left: 1rem;
    }
  }
`
