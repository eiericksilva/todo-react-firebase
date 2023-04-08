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
        background-color: var(--bg);
        color: #f2f2f2;
    }

    :root {
        --bg: #BFD8D2;
        --yellow: #FFED34;
        --blue-ciano: #5AB5F5;
        --gray: #F4F4F4;
        --blue-magenta: #1C1C2E;
        --quantum: #111111;
    }
`;
