import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  font-family: 'Space Mono', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TitleName = styled.h1`
  text-align: right;
  font-size: 100px;
  margin: 0;
  color: var(--yellow-color);
  padding: 20px;
  text-transform: uppercase;

  animation: showDown 1500ms linear;

  @keyframes showDown {
    0% {
      transform: translate(0px, 120%);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;

export const TitleSurname = styled.h2`
  text-align: right;
  padding: 20px;
  margin: 0;
  font-size: 70px;
  text-transform: uppercase;
  color: var(--red-color);

  animation: showUp 1500ms linear;

  @keyframes showUp {
    0% {
      transform: translate(0px, -120%);
      opacity: 0;
    }

    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
`;

// export const Button = styled.button`
//   margin-left: 45%;
//   margin-right: auto;
//   padding: 20px;
//   border: none;
//   color: var(--base-black);
//   background-color: var(--yellow-color);
//   cursor: pointer;
//   box-shadow: -10px 10px 0 var(--red-color);
// `;

export const Button = styled.button`
  margin-left: 45%;
  font-weight: 600;
  color: var(--base-black);
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: var(--yellow-color);
  border: 2px solid var(--yellow-color);
  border-radius: 0.75em;
  transition: transform 0.15s;
  transform-style: preserve-3d;

  ::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--red-color);
    border-radius: inherit;
    box-shadow: 0 0 0 2px rgba(), 0 0.625em 0 0 var(--red-color);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 0.15s, box-shadow 0.15s;
  }

  :active {
    background: var(--yellow-color);
    transform: translate(0em, 0.75em);
  }

  :active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    transform: translate3d(0, 0, -1em);
  }
`;
