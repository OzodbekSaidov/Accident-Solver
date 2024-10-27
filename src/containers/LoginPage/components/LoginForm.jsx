import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cookieData } from "../../../utils/cookies";
import * as ROUTES from "../../../constants/routes";
import { parol } from "./emails";
import "./Login.css"

// Styled Components
const LoginFormContainer = styled.div``;
const Login = styled.div``;
const LoginFormTitle = styled.h2`
  margin-bottom: 20px;
  margin-left: 2.6rem;
`;
const LoginFormInput = styled.input`

  margin-bottom: 20px;
  width: 85%;
  font-size: 16px;
`;
const LoginFormButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
`;
const PhoneNum = styled.h4`
  cursor: pointer;
`;
const RegisterType = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Number = styled("h1")`
  position: relative;
  bottom: 46%;
`;
const PhoneInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 80%;
  font-size: 20px;

`;
const LoginPhone = styled.div``;
const LoginPhoneButton = styled.button`
  cursor: pointer;
  border: none;
  color: white;
`;
const Email = styled.h4`

`;

// Main Component
const LoginForm = () => {
  const [formState, setFormState] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const FormChange = () => {
    setFormState((prevState) => (prevState === 0 ? 1 : 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = parol.find(
      (user) => (user.login === email && user.pwd === password) || user.PhoneNumber === PhoneNumber
    );

    if (user) {
      cookieData("token").setValue("some-auth-token");
      cookieData("email").setValue(user.login)
      cookieData("username").setValue(user.username);
      cookieData("password").setValue(user.pwd);
      cookieData("PhoneNumber").setValue(user.PhoneNumber);
      navigate(ROUTES.HOME_PAGE);
      window.location.reload();
      toast.success("Successfully logged in");
    } else {
      toast.error("Please enter a valid email and password");
    }
  };
  // Function to use CookieData

  // const [email, setEmail] = useState('');

  // const [username, setUsername] = useState('')

  // const [lastName, setLastName] = useState('');
  
  // const [phoneNumber, setPhoneNumber] = useState('')
  
  // const [password, setPassword] = useState('')

  // useEffect(() => {
  //   const storedEmail = cookieData("email").getValue();  
  //   const storedUsername = cookieData("username").getValue();
  //   const storedlastName = cookieData("lastName").getValue();
  //   const storedPassword = cookieData("password").getValue();
  //   const storedPhoneNumber = cookieData("PhoneNumber").getValue();
  //   if (storedEmail && storedUsername && storedlastName && storedPassword && storedPhoneNumber) {
  //     setEmail(storedEmail);
  //     setUsername(storedUsername);
  //     setLastName(storedlastName);
  //     setPassword(storedPassword);
  //     setPhoneNumber(storedPhoneNumber);
  //   }
  // }, []);
  return (
    <LoginFormContainer className="LoginContainer">
      {formState === 0 ? (
        <Login>
          <LoginFormTitle className="Login">SIGN UP</LoginFormTitle>
          <form onSubmit={handleSubmit}>
            <LoginFormInput
              type="text"
              className="LoginInput"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginFormInput
              type="password"
              className="LoginInput"
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <RegisterType>
              <LoginFormButton className="LoginButton" type="submit">Login</LoginFormButton>
              <PhoneNum className="PhoneNum" onClick={FormChange}>Continue with phone number</PhoneNum>
            </RegisterType>
          </form>
        </Login>
      ) : (
        <LoginPhone>
            <LoginFormTitle className="LoginTitle">LOGIN</LoginFormTitle>
          <PhoneInput
            className="PhoneInput"
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            type="text"

            />
          <LoginPhoneButton className="LoginPhonee" type="submit" onClick={handleSubmit}>Login</LoginPhoneButton>
          <Email className="EmailText" onClick={FormChange}>Continue with email</Email>
        </LoginPhone>
      )}
    </LoginFormContainer>
  );
};

export default LoginForm;