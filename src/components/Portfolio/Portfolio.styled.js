import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
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
`;

export const LeftTitle = styled.span`
  /* transition: 500ms linear; */
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
export const RightTitle = styled.span`
  /* transition: 500ms linear; */
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

export const PortfolioList = styled.ul`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const PortfolioItem = styled.li`
  position: relative;
  width: 300px;
  height: 250px;
  margin: 10px 20px;
  background-color: var(--base-black);
  /* box-shadow: 10px 10px 0 var(--red-color); */
  /* 
  animation: bounce 2000ms ease 200ms;

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }

    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }

    30% {
      transform: scale(0.9, 1.1) translateY(-50px);
    }

    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }

    57% {
      transform: scale(1, 1) translateY(-7px);
    }

    64% {
      transform: scale(1, 1) translateY(0);
    }

    100% {
      transform: scale(1, 1) translateY(0);
    }
  } */

  transition: 300ms ease-in-out;

  .center {
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    backface-visibility: hidden;
    transition: transform 500ms linear, box-shadow 600ms linear;
    /* box-shadow: 10px 10px 0 var(--red-color); */
  }

  :hover {
    scale: 1.1;
  }

  :hover > .front {
    transform: perspective(600px) rotateY(-180deg);
    box-shadow: -10px -10px 0 var(--red-color);
  }

  :hover > .back {
    transform: perspective(600px) rotateY(0deg);
    box-shadow: -10px -10px 0 var(--red-color);
  }

  :hover .hoverShow {
    opacity: 100%;
  }

  :hover .hoverHide {
    opacity: 0;
  }
`;

export const Link = styled.a``;

export const ImageW = styled.img`
  width: 300px;
  height: 250px;
  /* opacity: 50%; */
  transition: 300ms ease-in-out;
`;

export const SiteName = styled.p`
  position: absolute;
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  bottom: 10px;
  right: 10px;
  pointer-events: none;
  transition: 300ms ease-in-out;
  text-shadow: 0 0 10px var(--white-color);
`;

export const Front = styled.div`
  position: absolute;

  transform: perspective(600px) rotateY(0deg);
`;

export const Back = styled.div`
  position: absolute;
  background-color: var(--yellow-color);
  color: var(--white-color);
  width: 100%;
  height: 100%;

  transform: perspective(600px) rotateY(180deg);

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const SiteNameBack = styled.h2`
  color: var(--red-color);
  pointer-events: none;
`;

export const Stack = styled.p`
  color: var(--base-black);
`;

export const Description = styled.p`
  color: #727272;
  pointer-events: none;
`;
