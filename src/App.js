import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>Hello, World!</div>
    </>
  );
}

export default App;
