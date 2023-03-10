

import { Header, RegFormContainer, RegisterContainer, RegisterForm, StyledButton, StyledInput } from './Register.style';

const Register = () => {
  return (
    <RegisterContainer>
       <RegFormContainer>
        <RegisterForm >
        <Header>REGİSTER</Header>
          <StyledInput type="text" placeholder="Username" required />
          <StyledInput type="password" placeholder="Password" required />
          <StyledInput type="password" placeholder="again Password" required />
          <StyledButton type="submit">register</StyledButton>
        </RegisterForm>
      </RegFormContainer>
    </RegisterContainer>
  );
}

export default Register