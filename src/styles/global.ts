import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }
    body {
        background: #d6d4d4;
        background-image: url("https://i.pinimg.com/originals/de/f4/73/def473f3b4380d977d23ac2502cb1d77.jpg");
        
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 15px 20px;
    }
    button {
        cursor: pointer;
    }

`;