import styled from 'styled-components';
import {
  // BsGithub,
  BsFillTelephoneInboundFill,
  BsMailbox,
  BsLinkedin,
  BsWhatsapp,
} from 'react-icons/bs';

// export const IconGitHub = styled(BsGithub)`
//   transition: 300ms linear;
//   margin-bottom: 10px;
//   /* fill: var(--red-color); */
// `;

export const IconPhone = styled(BsFillTelephoneInboundFill)`
  transition: 300ms linear;
  margin-bottom: 10px;

  /* fill: var(--red-color); */
`;

export const IconMail = styled(BsMailbox)`
  transition: 300ms linear;
  margin-bottom: 10px;

  /* fill: var(--red-color); */
`;
export const IconLinkedin = styled(BsLinkedin)`
  transition: 300ms linear;
  margin-bottom: 10px;

  /* fill: var(--red-color); */
`;

export const IconWhatsapp = styled(BsWhatsapp)`
  transition: 300ms linear;
  margin-bottom: 20px;

  /* fill: var(--red-color); */
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
  grid-template-columns: 1fr, 1fr, 1fr;
  /* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); */
  align-items: center;
  grid-template-areas:
    'main tel whatsApp'
    'main linkedin mail';
  /* justify-items: center; */
  margin: 30px;

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

export const MainContact = styled.div`
  width: 400px;
  height: 400px;
  background-color: var(--yellow-color);
  transition: 300ms linear;

  :hover {
    box-shadow: -10px -10px 0 var(--red-color);
    scale: 1.1;
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
  width: 200px;
  height: 200px;
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
      width: 180px;
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
