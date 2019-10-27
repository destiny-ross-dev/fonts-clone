import styled from "styled-components";

const Container = styled.footer`
  position: fixed;
  height: 45px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0px;
  text-orientation: mixed;
  background: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.06);
  z-index: 2;
  padding: 0 600px 0 64px;
  border-top: ${props => props.theme.border};
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
