import { createGlobalStyle } from "styled-components";
import BackGroundImage from "../assets/blurry-gradient-haikei.png";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', monospace;
    }

    body {
        background-color: #007AF5;
        color: #f2f2f2;
    }

`;
