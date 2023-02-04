import styled from 'styled-components';
import {
  BsFillTelephoneInboundFill,
  BsMailbox,
  BsLinkedin,
  BsWhatsapp,
  BsFillForwardFill,
} from 'react-icons/bs';

export const IconPhone = styled(BsFillTelephoneInboundFill)`
  transition: 300ms linear;
  margin-bottom: 10px;
`;

export const IconMail = styled(BsMailbox)`
  transition: 300ms linear;
  margin-bottom: 10px;
`;
export const IconLinkedin = styled(BsLinkedin)`
  transition: 300ms linear;
  margin-bottom: 10px;
`;

export const IconWhatsapp = styled(BsWhatsapp)`
  transition: 300ms linear;
  margin-bottom: 20px;
`;

export const IconArrow = styled(BsFillForwardFill)`
  margin-left: 50%;
`;

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
  position: relative;
  /* width: 100%; */
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: 1fr, 1fr, 1fr;
  align-items: center;
  grid-template-areas:
    'main tel whatsApp'
    'main linkedin mail';
  margin: 20px;

  .main {
    grid-area: main;
  }
  .tel {
    grid-area: tel;
  }
  .whatsApp {
    grid-area: whatsApp;
  }
  .linkedin {
    grid-area: linkedin;
  }
  .mail {
    grid-area: mail;
  }
`;

export const AboutMe = styled.p`
  position: absolute;
  font-size: 23px;
  margin: 20px;
  width: 360px;
  /* top: 0; */
`;

export const MainContact = styled.div`
  width: 400px;
  height: 400px;
  background-color: var(--yellow-color);
  transition: 300ms linear;

  :hover {
    box-shadow: -10px -10px 0 var(--red-color);
    scale: 1.1;
  }

  :hover .hover {
    fill: var(--red-color);

    animation: move 1000ms linear infinite alternate;

    @keyframes move {
      0% {
        transform: translate(0px, 0px);
        /* opacity: 0; */
      }

      100% {
        transform: translate(50%, 0px);
        /* opacity: 1; */
      }
    }
  }
`;

export const TitleColorDesc = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0 0 0;
  text-align: center;
  color: #ffff;
  font-size: 30px;

  background: linear-gradient(
    219deg,
    var(--color-1) 19%,
    var(--color-2) 20%,
    var(--color-2) 39%,
    var(--color-3) 40%,
    var(--color-3) 59%,
    var(--color-4) 60%,
    var(--color-4) 79%,
    var(--color-5) 80%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Cube = styled.div`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  cursor: grab;
  padding: 10px;

  .square {
    width: 20px;
    height: 20px;
    background: var(--yellow-color);
    opacity: 0.8;
    margin: 2px;
    font-size: 0;
    box-shadow: 0 0 2px #000;
    transition: 1500ms ease;
    /* border-radius: 50%; */
    border: none;
    cursor: grab;
  }

  .square:hover {
    transition-duration: 0s;
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--base-black);
  font-size: 20px;
  width: 200px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  width: 180px;
  height: 180px;
  background-color: var(--yellow-color);
  transition: 300ms linear;

  :hover {
    box-shadow: -10px -10px 0 var(--red-color);
    scale: 1.1;
  }

  :hover .hover {
    fill: var(--red-color);
  }

  :hover .hoverLink {
    color: var(--red-color);
  }

  .dsongentom {
    display: none;
  }

  :hover .dsongentom {
    display: block;
    position: relative;
    margin: 0 auto;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
  }

  :hover .desetungavon {
    animation: typewriter 1s steps(44) 1 normal both,
      blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 160px;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }
`;
