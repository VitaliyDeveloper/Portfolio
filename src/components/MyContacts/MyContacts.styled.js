import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  padding: 30px 0;
`;

export const Title = styled.h2`
  text-align: center;
  padding: 0 20px;
  margin: 0;
  font-size: 70px;
  text-transform: uppercase;
  color: var(--red-color);
  text-shadow: 2px 2px 0 var(--yellow-color);
  pointer-events: none;
  animation: showUp 1000ms linear;

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

export const TitleContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-bottom: 15px;
  /* overflow: hidden; */

  ::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 10px;
    height: 10px;
    background: var(--yellow-color);

    animation: sd 7000ms ease-in-out infinite alternate-reverse;

    @keyframes sd {
      0% {
        left: 0%;
        transform: rotate(0deg);
        background: var(--yellow-color);
      }
      100% {
        left: 100%;
        background: var(--red-color);
        transform: rotate(360deg);
      }
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin-top: 30px;
`;

export const Contact = styled.div`
  margin: 20px;
  width: 200px;
  height: 200px;
  background-color: var(--yellow-color);
  transition: 300ms linear;

  :hover {
    box-shadow: -10px -10px 0 var(--red-color);
    scale: 1.1;
  }
`;
