import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 500px;
  height: ${props => (props.savedListOpen ? "450px" : "45px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  right: 107px;
  bottom: 0;
  z-index: 5;
  box-shadow: ${props => props.theme.bs};
`;
const Header = styled.div`
  background: rgb(34, 34, 34);
  height: 45px;
  width: 500px;
  display: flex;
  align-items: center;
  text-align: start;
  padding: 12px 24px;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  span {
    color: ${props => props.theme.accent};
    margin-right: 4px;
  }
`;

const SelectionDisplay = styled.div`
  height: 100%;
  width: 100%;
  background: #fafafa;
  color: ${props => props.theme.color};
  padding: 24px;
  overflow-y: scroll;
  margin-top: 45px;
  h3 {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.87);
    font-family: "Roboto";
  }

  .StateHeader {
    display: flex;
    flex-wrap: wrap;
    button {
      margin: 0 auto 0 12px;
      background: none;
      border: none;
      display: flex;
      align-items: center;
      font-size: 12px;
      cursor: pointer;
      color: ${props => props.theme.accent};
    }
    svg {
      color: ${props => props.theme.accent};
      margin-left: 12px;
      cursor: pointer;
    }
  }
  .List {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 12px 0 24px 0;
  }
`;

const FontNamePill = styled.div`
  background: ${props => props.theme.accent};
  padding: 6px 12px;
  width: fit-content;
  margin-right:6px;
  margin:6px 6px 6px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow:${props => props.theme.bs}
  p {
    margin-right:8px;
    color:white;
  }
  svg {
    margin-left: 8px;
    color: white;
  }
`;

const GenerateURL = styled.div`
  text-align: start;
  font-size: 14px;
  /* margin: 24px 0; */

  p {
    color: black;
  }

  .CodeBlock {
    margin: 12px 0;
    font-size: 12px;
    font-family: "Roboto";
    background: rgba(0, 0, 0, 0.08);
    padding: 11px 16px;
    width: 100%;
    min-height: 40px;
    word-wrap: break-word;

    li {
      list-style: none;
      color: black;
    }
  }
`;
const SavedListStyles = {
  Container,
  Header,
  SelectionDisplay,
  FontNamePill,
  GenerateURL
};

export default SavedListStyles;
