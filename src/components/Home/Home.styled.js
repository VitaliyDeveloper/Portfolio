import styled from 'styled-components';
// import myPhoto from '../../img/me.jpg';
// import myPhoto from '../../img/ssss.jpg';
import myPhoto from '../../img/ddd.jpg';

export const HomeContainer = styled.div`
  width: 100%;

  /* display: flex; */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
`;

export const AvatarContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
`;

export const MyPhoto = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${myPhoto});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 9;
`;

export const PulserContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: 500ms linear;

  animation: pulser 1500ms linear infinite;

  @keyframes pulser {
    0% {
      background-color: var(--red-color);
      scale: 1;
    }
    25% {
      background-color: var(--red-color);
      scale: 1.1;
    }
    50% {
      background-color: var(--yellow-color);
      scale: 1.2;
    }
    100% {
      background-color: var(--red-color);

      scale: 1;
    }
  }
`;

export const TitleContainer = styled.div`
  font-family: 'Space Mono', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 50px;
`;

export const TitleName = styled.h1`
  text-align: right;
  font-size: 100px;
  margin: 0;
  color: var(--yellow-color);
  text-shadow: 2px 2px 0 var(--red-color);

  padding: 0 20px;
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
  padding: 0 20px;
  margin: 0;
  font-size: 70px;
  text-transform: uppercase;
  pointer-events: none;
  color: var(--red-color);
  text-shadow: 2px 2px 0 var(--yellow-color);

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
export const TitlePosition = styled.h3`
  text-align: right;
  padding: 20px 20px;
  margin: 0;
  font-size: 40px;
  text-shadow: 2px 2px 0 var(--red-color);

  color: var(--yellow-color);

  animation: showUp 1500ms linear;
`;

export const Button = styled.button`
  margin: 20px;
  font-weight: 600;
  color: var(--base-black);
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: var(--yellow-color);
  border: 2px solid var(--yellow-color);
  border-radius: 0.75em;
  transition: transform 0.15s;
  transform-style: preserve-3d;
  cursor: pointer;

  /* animation: showUp 1000ms linear; */

  /* @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */

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
