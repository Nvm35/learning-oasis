import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
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
