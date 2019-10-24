import React from "react";
import Select from "react-select";

import ToolbarStyles from "./toolbar.styles";

const TextModOptions = [
  { value: "sentence", label: "Sentence" },
  { value: "paragraph", label: "Paragraph" },
  { value: "alphabet", label: "Alphabet" },
  { value: "numerical", label: "Numerical" },
  { value: "custom", label: "Custom Text" }
];
const FontSizeOptions = [
  { value: "8px", label: "8px" },
  { value: "12px", label: "12px" },
  { value: "16px", label: "16px" },
  { value: "20px", label: "20px" },
  { value: "24px", label: "24px" }
];
const Toolbar = ({
  toolbarFixedToTop,
  displayTextType,
  setDisplayTextType,
  displayText,
  setDisplayText,
  fontSize,
  setFontSize,
  reset,
  themeIsLight,
  setThemeIsLight,
  listType,
  setListType,
  searchQuery,
  setSearchQuery,
  onSearchSubmit
}) => {
  return (
    <ToolbarStyles.Container
      className={toolbarFixedToTop ? "fixedToTop" : "independent"}
    >
      <ToolbarStyles.SearchContainer>
        <i className="fal fa-search"></i>
        <input
          placeholder="Search Fonts"
          value={searchQuery}
          onChange={e => setSearchQuery(e)}
        />
        <button onClick={() => onSearchSubmit()}>Submit</button>
      </ToolbarStyles.SearchContainer>
      <ToolbarStyles.TextModContainer title="Update preview text">
        <Select
          classNamePrefix="react-select"
          onChange={e => setDisplayTextType(e.value)}
          defaultValue={{
            value: displayTextType,
            label:
              displayTextType.charAt(0).toUpperCase() +
              displayTextType.substr(1).toLowerCase()
          }}
          options={TextModOptions}
          styles={customStyles}
          placeholder="Display Type"
        />
        <input
          placeholder="Type Custom Text"
          onChange={e => setDisplayText(e.target.value)}
          value={displayText}
        />
      </ToolbarStyles.TextModContainer>

      <ToolbarStyles.FontSizeModContainer title="Update Font Size">
        <Select
          classNamePrefix="react-select"
          options={FontSizeOptions}
          styles={customStyles}
          placeholder="Size"
          value={{ value: fontSize, label: fontSize }}
          onChange={e => setFontSize(`${e.value}`)}
        />
        <input
          type="range"
          min={8}
          max={64}
          step={2}
          value={fontSize.slice(0, -2)}
          onChange={e => setFontSize(`${e.target.value}px`)}
        />
      </ToolbarStyles.FontSizeModContainer>

      <ToolbarStyles.ThemeContainer>
        <button className="light" onClick={() => setThemeIsLight(true)}>
          {themeIsLight && (
            <div>
              <i className="far fa-check"></i>
            </div>
          )}
        </button>
        <button className="dark" onClick={() => setThemeIsLight(false)}>
          {!themeIsLight && (
            <div>
              <i className="far fa-check"></i>
            </div>
          )}
        </button>
      </ToolbarStyles.ThemeContainer>

      <ToolbarStyles.ListDisplayContainer>
        <button
          onClick={() => setListType("grid")}
          className={`${listType === "grid" && "active"}`}
        >
          <i className="fal fa-th-large"></i>
        </button>

        <button
          onClick={() => setListType("list")}
          className={`${listType === "list" && "active"}`}
        >
          <i className="fal fa-list"></i>
        </button>
      </ToolbarStyles.ListDisplayContainer>

      <ToolbarStyles.ResetContainer title="Reset">
        <button onClick={e => reset()}>
          <i className="fas fa-redo"></i>
        </button>
      </ToolbarStyles.ResetContainer>
    </ToolbarStyles.Container>
  );
};
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  control: provided => {
    return {
      margin: "0",
      width: 100,
      display: "flex",
      padding: "2px 0px",
      height: "100%",
      border: "none"
    };
  },
  indicatorSeparator: () => ({
    display: "none"
  }),
  dropdownIndicator: (provided, state) => {
    return {
      ...provided,
      color: "#ff5252",
      "&:hover": {
        color: "#ff5252"
      }
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    padding: "0 0",
    border: "none",
    color: "rgba(0,0,0,.6)"
  })
};

export default Toolbar;
