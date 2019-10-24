import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  padding: 0 64px;
  margin: 0 auto;
  & h2 {
    width: 100%;
    & span {
      color: ${props => props.theme.accent};
    }
  }
`;

const FontListStyles = {
  Container
};

export const FontCard = styled.div``;

export default FontListStyles;
