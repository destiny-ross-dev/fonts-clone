import styled from "styled-components";

const Container = styled.div`
  box-shadow: ${props => props.theme.bs};
  border: 1px solid ${props => props.theme.border};
  padding: 24px;
  min-width: 300px;
  max-width: 480px;
  min-height: 120px;
  margin: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: start;
  border-top: 1px solid ${props => props.theme.accent};
  :hover {
    border-top: 2px solid ${props => props.theme.accent};
  }
  h2 {
  }
  p {
    word-wrap: break-word;
  }
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: ${props => props.theme.accent};
    font-size: 24px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: none;
    &:hover {
      color: ${props => props.theme.dark};
      text-shadow: ${props => props.theme.bs};

      transform: scale(1.2);
    }
  }
`;

const SubTitle = styled.h3``;

const Card = {
  Container,
  TitleBar,
  SubTitle
};

export default Card;
