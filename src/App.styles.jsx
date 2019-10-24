import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing:border-box;
  font-size:10px;
}
*, *:before, *:after {
  box-sizing:inherit;
  margin:0; 
  padding:0;
  transition:position .5s cubic-bezier(0.075, 0.82, 0.165, 1)
}
body {
  padding:0;
  margin:0;
  font-size:1.5rem;
  line-height:1.5;
  text-align: center;
}
a {
  text-decoration:none;
}
input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent; 
  border-color: transparent;
  color: transparent;
}
`;

export const AppContainer = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 130vh;
  position: relative;
`;

export const ToTopButton = styled.button`
  position: fixed;
  right: 60px;
  bottom: 60px;
  font-size: 20px;
  background: white;
  border: 1px solid ${props => props.theme.accent};
  border-radius: 50px;
  height: 30px;
  width: 30px;
  color: ${props => props.theme.accent};
  z-index: 10;
  :hover {
    transform: scale(1.5);
    transition: scale 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export default GlobalStyle;
