import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: white;
        font-family: 'Outfit', sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyled;
