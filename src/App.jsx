import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: wheat;
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;
const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>App</H1>
        <Button>Check in</Button>
        <Input type="number" placeholder="name"></Input>
      </StyledApp>
    </>
  );
}

export default App;