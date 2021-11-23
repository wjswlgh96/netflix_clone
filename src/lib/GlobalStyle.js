import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        width: 100vw;
        padding: 0px;
        margin: 0px;
        text-decoration: none;
        list-style: none;
        font-size: 1vw;
        overflow: hidden;
        z-index: 0;
        border: 0;
        outline: 0;   
    }
`;

export default GlobalStyle;
