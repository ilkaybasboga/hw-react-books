import styled from "styled-components";

export const RegisterContainer = styled.div`
  background-image: url("https://www.1stformationsblog.co.uk/wp-content/uploads/2022/09/Shutterstock_1079243414.jpg");

  background-size: cover;
  margin: 1rem;
  height: 100vh;
  opacity: 0.8;
`;
export const RegFormContainer = styled.div`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  padding: 0.5rem;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;
export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  background-color: rgba(220, 202, 202, 0.13);
  margin: auto;
  margin-top: 3rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(25, 23, 39, 0.6);
  padding: 2rem;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`;

export const StyledInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(83, 99, 222, 0.5);
  border-radius: 15px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  border: none;
  ::placeholder {
    color: black;
  }
  :focus {
    background-color: white;
  }
`;
export const StyledButton = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  color: ${({ theme }) => theme.colors.linkColor};
  padding: 15px 0;
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
export const Header = styled.div``;
