import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutContainer = styled(Flex)`
    flex-direction:column;
    line-height:2;
    text-align:center;
`
export const ProfileImg = styled.img`
  margin: 2rem 0;
  border-radius: 50%;
  height: 200px;
  filter: drop-shadow(-5px 10px 10px #f4e9e9);
`;

export const InfoContainer = styled.div`
  margin: 0 2rem 1rem;
  width: 60%;
  border: 1px solid white;
  color: ${({ theme }) => theme.colors.linkColor};
  padding: 5rem;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(155, 150, 150, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const IconContainer = styled.div`
    margin: 2rem;
    a {
        color:gray;
        padding:1rem;
    }
`
