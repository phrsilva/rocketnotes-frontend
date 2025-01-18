import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        -webkit-font-smoothing: antialiased;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer; 
        transition: filter 0.2s;
    }

    a:hover, button:hover {
        filter: brightness(0.9);
    }
    
`;