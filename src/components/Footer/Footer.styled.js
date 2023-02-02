import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 50px; */
  padding: 10px 0;
  text-align: center;
  background-color: var(--base-black);
  overflow: hidden;
`;

export const FooterList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterItem = styled.li`
  /* margin: 10px; */
  padding: 5px;

  &:not(:last-child) {
    border-right: 1px solid var(--yellow-color);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: var(--yellow-color);
  transition: color 500ms ease;

  &:hover {
    color: var(--red-color);
  }
`;

export const Dot1 = styled.span`
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  background-color: var(--red-color);

  animation: dotLeft 7000ms ease-in-out infinite alternate-reverse;

  @keyframes dotLeft {
    0% {
      left: 110%;
      transform: rotate(0deg);
    }
    100% {
      left: -10%;
      transform: rotate(360deg);
    }
  }
`;
export const Dot2 = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;

  background-color: var(--yellow-color);

  animation: dotRight 7000ms ease-in-out infinite alternate-reverse;

  @keyframes dotRight {
    0% {
      left: -10%;
      transform: rotate(0deg);
    }
    100% {
      left: 110%;
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.p`
  font-size: 12px;
  color: var(--yellow-color);
  padding: 0;
`;

export const Copy = styled.p`
  font-size: 12px;
  padding: 0;
`;
