import { nanoid } from '@reduxjs/toolkit';

import {
  ContactContainer,
  TitleContainer,
  Title,
  Wrapper,
  MainContact,
  Contact,
  IconPhone,
  IconMail,
  IconLinkedin,
  IconWhatsapp,
  Link,
  Co,
  TitleColorDesc,
} from './MyContacts.styled';

const MyContacts = () => {
  const colors = [
    '#BFFF00',
    '#FFD700',
    '#EB6123',
    '#DF73FF',
    '#4B0082',
    '#FBAED2',
    '#545AA7',
    '#15F2FD',
  ];

  let count = 210;
  let cubes = [];

  for (let i = 0; i < count; i++) {
    cubes[i] = i + 1;
  }

  console.log(cubes);

  const setColor = event => {
    const el = event.target;
    const color = getRamdomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = event => {
    const el = event.target;
    el.style.boxShadow = `none`;
    el.style.backgroundColor = `{var(--yellow-color)}`;
  };

  const getRamdomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <ContactContainer>
      <TitleContainer>
        <Title>How to contact me</Title>
      </TitleContainer>
      <Wrapper>
        <MainContact className="main">
          <TitleColorDesc>Color desc</TitleColorDesc>
          <Co className="container" id="board">
            {cubes.map(cub => (
              <div
                key={nanoid()}
                className="square"
                onMouseLeave={removeColor}
                onMouseOver={setColor}
              >
                {cub}
              </div>
            ))}
          </Co>
        </MainContact>

        <Contact className="tel">
          <Link
            href="tel:+77777777777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconPhone className="hover" size="100" />
            <p className="desetungavon dsongentom hoverLink">
              +7 777 777 77 77
            </p>
          </Link>
        </Contact>
        <Contact className="mail">
          <Link
            href="mailto:gerassimov.developer@mail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconMail className="hover" size="100" />
            <p className="desetungavon dsongentom hoverLink">
              gerassimov.developer@gmail.com
            </p>
          </Link>
        </Contact>
        <Contact className="linkedin">
          <Link
            href="https://www.linkedin.com/in/vitaliy-gerassimov-665255236/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin className="hover" size="100" />
            <p className="desetungavon dsongentom hoverLink">
              Link to Linkedin
            </p>
          </Link>
        </Contact>
        <Contact className="whatsApp">
          <Link
            href="https://wa.me/77777777777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsapp className="hover" size="100" />
            <p className="desetungavon dsongentom hoverLink">WhatsApp</p>
          </Link>
        </Contact>
      </Wrapper>
    </ContactContainer>
  );
};

export default MyContacts;
