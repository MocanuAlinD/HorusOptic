import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  --color-primary-dark1: #151515;    // gray
  --color-primary-dark2: #242423;   // gray
  --color-primary-dark2op: #24242388; // gray opacity 88
  --color-primary-light: #f5cb5c;   // some yellow
  --color-primary-lighten1: #e8eddf;  // some white
  --color-primary-lighten2: #e8eddf70; // some white opacity 70
  /* --color-primary-blue: #1a73e8; // blue */
  --color-primary-blue: #3f51b5; // blue
  --color-primary-blueHover: #303f9f; // blue hover
  --color-primary-darkblue: #00509d; // blue
  --color-extra-light: #ffffff44; // white opacity 18
  --font-family-cinzel: 'Cinzel Decorative', cursive;
  --font-family-poppins: 'Poppins', sans-serif;
  --font-w200: 200;
  --font-w400: 400;
  --font-w600: 600;
  --font-w800: 800;
  --transition: all .35s ease-in-out;
  --minheight: calc(100vh - 17rem);
  width: 100%;
  background: var(--color-primary-dark2);
  height: fit-content;
  min-height: 100vh;
  background-image: url('/bg13.jpg');
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  scroll-behavior: smooth;
  transition: var(--transition);
}

body.dark {
  --color-primary-dark1: #f8f9fa;    // gray
  --color-primary-dark2: #f5f3f4;   // gray
  --color-primary-dark2op: #e9ecef88; // gray opacity 88
  /* --color-primary-light: #f95738;   // some yellow */
  /* --color-primary-light: #f95738;   // some yellow */
  /* --color-primary-light: #0077b6;   // some yellow */
  --color-primary-light: #0081a7;   // some yellow
  --color-primary-lighten1: #151515;  // some white
  --color-primary-lighten2: #24242388; // some white opacity 70
  /* --color-primary-blue: #1a73e8; // blue */
  --color-primary-blue: #3f51b5; // blue
  --color-primary-blueHover: #303f9f; // blue hover
  --color-extra-light: #24242388; // white opacity 18
  --font-family-cinzel: 'Cinzel Decorative', cursive;
  --font-family-poppins: 'Poppins', sans-serif;
  --font-w200: 200;
  --font-w400: 400;
  --font-w600: 600;
  --font-w800: 800;
  --transition: all .35s ease-out;
  --minheight: calc(100vh - 17rem);
  width: 100%;
  background: var(--color-primary-dark2);
  height: fit-content;
  min-height: 100vh;
  background-image: url('/bgLight1.jpg');
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: content-box;
  scroll-behavior: smooth;
  transition: var(--transition);
}

a {
  color: inherit;
  text-decoration: none;
}

::-webkit-scrollbar{
	width: 12px;
}

::-webkit-scrollbar-track{
  -webkit-border: 1px solid var(---color-primary-light);
  -moz-border: 1px solid var(---color-primary-light);
  -o-border: 1px solid var(---color-primary-light);
	border: 1px solid var(--color-primary-light);
	box-shadow: inset 0 0 2.5px 2px rgba(0,0,0,0.5);
  background: var(--color-primary-dark2);
}

::-webkit-scrollbar-thumb{
	background: linear-gradient(var(--color-primary-dark2), var(--color-primary-light), var(--color-primary-dark2));
  border-top: 1px solid var(--color-primary-light);
  border-bottom: 1px solid var(--color-primary-light);
}

@media screen and (max-width:768px){
  body{
    background-image: url('/bg13_tall.jpg');
    /* background-image: none; */
    /* background: #151515; */
  }
}
`;

export default GlobalStyle;
