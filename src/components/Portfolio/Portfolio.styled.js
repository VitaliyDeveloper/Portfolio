import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`;

export const PortfolioList = styled.ul`
  margin-top: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const PortfolioItem = styled.li`
  position: relative;
  width: 300px;
  height: 250px;
  margin: 10px 20px;
  background-color: var(--white-color);

  animation: bounce 2000ms ease;

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
  }

  transition: 300ms ease-in-out;

  :hover {
    /* border: 2px solid var(--red-color); */
    scale: 1.1;
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
  opacity: 50%;
  transition: 300ms ease-in-out;
`;

export const SiteName = styled.p`
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
  right: 10px;
  pointer-events: none;
  transition: 300ms ease-in-out;
`;

export const Side = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
