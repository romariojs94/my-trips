import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: var(--large) var(--medium);
`

export const Container = styled.section`
  max-width: var(--container);
  padding-bottom: var(--large);
  margin: auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--medium);
`

export const Body = styled.div`
  margin-bottom: var(--large);

  p {
    margin-bottom: var(--medium);
  }
`

export const Gallery = styled.div`
  display: grid;
  gap: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--small);
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`

export const Caption = styled.p`
  font-size: var(--small);
  color: var(--grey);
  margin-bottom: var(--medium);

  a {
    font-size: var(--small);
  }
`
