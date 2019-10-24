import styled from "styled-components";

const Container = styled.div`
  width: 1160px;
  height: 46px;
  height: 56px;
  border-radius: 48px;
  border: ${props => props.theme.border};
  position: sticky;
  top: 0;
  margin: 24px;
  box-shadow: ${props => props.theme.bs};
  z-index: 10;
  background: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${props => props.theme.bg};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &.fixedToTop {
    height: 56px;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: ${props => props.theme.border};
    z-index: 10;
    padding: 0 64px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  & svg {
    margin: 0 8px 0 16px;
  }
  & input {
    border: none;
    width: 150px;
    height: 100%;
    background: none;
    padding: 4px 8px;

    color: ${props => props.theme.color};

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.color};
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: ${props => props.theme.color};
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: ${props => props.theme.color};
    }
  }

  & button {
    padding: 10px;
    background: ${props => props.theme.accent};
    box-shadow: ${props => props.theme.bs};
    border: ${props => props.theme.border};
    color: white;
    display: flex;
    align-items: center;
    transition: all 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    margin: 0 12px;
    cursor: pointer;
    :focus {
      outline-color: ${props => props.theme.dark};
      border: none;
    }
    :hover {
      background: #fafafa;
      color: ${props => props.theme.accent};
    }
  }
`;

const TextModContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 0;
  border-right: ${props => props.theme.border};
  border-left: ${props => props.theme.border};

  input {
    background: none;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color};
    padding: 4px 8px;
    width: 300px;
    color: ${props => props.theme.color};
  }

  .react-select__single-value {
    color: ${props => props.theme.color};
  }
`;
const FontSizeModContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 12px 0 0;
  border-right: ${props => props.theme.border};

  .react-select__single-value {
    color: ${props => props.theme.color};
  }

  input[type="range"] {
    -webkit-appearance: none;
    margin: 18px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: ${props => props.theme.accent};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-webkit-slider-thumb {
    border: 2px solid rgb(255, 82, 82);
    height: 16px;
    width: 16px;
    border-radius: 20px;
    background: ${props => props.theme.accent};
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${props => props.theme.accent};
  }
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: ${props => props.theme.accent};
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  input[type="range"]::-moz-range-thumb {
    border: 2px solid rgb(255, 82, 82);
    height: 16px;
    width: 16px;
    border-radius: 20px;
    background: ${props => props.theme.accent};
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: ${props => props.theme.accent};
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-fill-upper {
    background: ${props => props.theme.accent};
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type="range"]::-ms-thumb {
    border: 2px solid rgb(255, 82, 82);
    height: 16px;
    width: 16px;
    border-radius: 20px;
    background: ${props => props.theme.accent};
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: ${props => props.theme.accent};
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: ${props => props.theme.accent};
  }
`;
const ThemeContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-right: ${props => props.theme.border};

  & button {
    height: 20px;
    width: 20px;
    border-radius: 48px;
    border: ${props => props.theme.border};
    color: ${props => props.theme.accent};
    margin: 4px;
  }
  button:hover {
    border: 1px solid ${props => props.theme.accent};
  }
  .dark {
    background: #1f1b24;
  }
  .light {
    background: white;
  }
`;

const ResetContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  button {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      color: ${props => props.theme.accent};
    }
  }
`;

const ListDisplayContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-right: ${props => props.theme.border};
  button {
    background: ${props => props.theme.bg};
    color: ${props => props.theme.color};
    border: none;
    height: 20px;
    font-size: 16px;
    width: 20px;
    border-radius: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;

    :hover {
      color: ${props => props.theme.accent};
    }
  }
  .active {
    color: ${props => props.theme.accent};
  }
`;

const ToolbarStyles = {
  Container,
  SearchContainer,
  TextModContainer,
  FontSizeModContainer,
  ThemeContainer,
  ListDisplayContainer,
  ResetContainer
};

export default ToolbarStyles;
