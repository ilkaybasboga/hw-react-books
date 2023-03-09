import React from 'react'
import { AboutContainer, IconContainer, InfoContainer, ProfileImg } from './About.style'
import profile from "../../assets/about.png"
import Icon from '../../components/icon/Icon';
import { iconData } from '../../helper/iconData';

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm İlkay</h2>
        <h3>I’m currently learning Front-End Development Languages.</h3>
        <h4>
        I'm learning HTML, CSS, JS, ReactJS. Even though React is very difficult right now, I can handle it.
        </h4>
        <h4>😳I don't have much time so don't bother me</h4>
      </InfoContainer>
      <IconContainer>
        {iconData.map(item=> <a key={item.icon} href={item.href}>
          <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
        </a>)}
      </IconContainer>
    </AboutContainer>
  );
}

export default About