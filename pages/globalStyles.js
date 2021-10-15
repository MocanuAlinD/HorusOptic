import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary-dark1: #151515;    // gray
  --color-primary-dark2: #242423;   // gray
  --color-primary-dark2op: #24242388; // gray opacity 88
  --color-primary-light: #f5cb5c;   // some yellow
  --color-primary-lighten1: #e8eddf;  // some white
  --color-primary-lighten2: #e8eddf70; // some white opacity 70
  --color-primary-blue: #1a73e8; // blue
  --color-extra-light: #ffffff18; // white opacity 18
  --font-family-cinzel: 'Cinzel Decorative', cursive;
  --font-family-poppins: 'Poppins', sans-serif;
  --font-w200: 200;
  --font-w400: 400;
  --font-w600: 600;
  --font-w800: 800;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: 'Poppins', sans-serif; */
  /* line-height: 1.3; */
}

html,
body {
  width: 100%;
  background: #242423;
  min-height: calc(100vh - 3rem);
  background-image: url('/bg13.jpg');
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  scroll-behavior: smooth;
  
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
	width: 12px;
}

::-webkit-scrollbar-track{
	border: 1px solid #f5cb5c;
	box-shadow: inset 0 0 2.5px 2px rgba(0,0,0,0.5);
  background: #242423;
}

::-webkit-scrollbar-thumb{
	background: linear-gradient(#242423, #f5cb5c88, #242423);
  border-top: 1px solid #f5cb5c;
  border-bottom: 1px solid #f5cb5c;
}

@media screen and (max-width:768px){
  body{
    background-image: url('/bg13_tall.jpg');
    background-image: none;
    /* background: #151515; */
  }
}
`;

export default GlobalStyle