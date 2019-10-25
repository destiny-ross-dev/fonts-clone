import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  width: 50px;
  height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  bottom: 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  z-index: 2;
  p {
    margin: 25px 0;
  }
  a {
    margin: 10px 0;
    color: ${props => props.theme.accent};
    text-decoration: underline;
    :visited {
      color: ${props => props.theme.dark};
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const FooterStyles = {
  Container
};

export default FooterStyles;
