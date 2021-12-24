import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`

@font-face {
  font-family: "ISOCTEUR"; src: url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.eot");
  src: url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.eot?#iefix") format("embedded-opentype"),
  url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.woff")
  format("woff"), url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/a96215c9d9ddf6f69b603c331081496e.svg#ISOCTEUR") format("svg");
}


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #10171E;
        font-family: sans-serif;
        overflow-x: hidden;
    }
`;

export default GlobalStyled;
