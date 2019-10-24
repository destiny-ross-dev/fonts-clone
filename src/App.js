import React, { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import Header from "./components/header/header.component";
import Toolbar from "./components/toolbar/toolbar.component";
import GlobalStyle, { AppContainer, ToTopButton } from "./App.styles";
import SavedList from "./components/saved-list/saved-list.component";
import Footer from "./components/footer/footer.component";
import Loader from "./components/loader/loader.component";

import { LOAD_ON_INIT } from "./config";
const FontList = React.lazy(() =>
  import("./components/font-list/font-list.component")
);
const lightTheme = {
  bg: "white",
  color: "rgba(0,0,0,.6)",
  accent: "#ff5252",
  dark: "#FF1F1F",
  bs: "0 4px 4px rgba(0,0,0,.06)",
  border: "1px solid rgba(0, 0, 0, 0.06)"
};

const darkTheme = {
  bg: "#1F1B24",
  color: "white",
  accent: "#ff5252",
  dark: "#FF1F1F",
  border: "1px solid white"
};

function App() {
  // data & list related
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // layout
  const [displayToTop, setDisplayToTop] = useState(false);
  const [toolbarFixedToTop, setFixedToTop] = useState(false);

  // display text
  const [displayTextType, setDisplayTextType] = useState("sentence");
  const [displayText, setDisplayText] = useState(
    "Sphinx of black quartz, judge my vow."
  );
  const [fontSize, setFontSize] = useState("32px");

  const [themeIsLight, setThemeIsLight] = useState(true);
  const [listType, setListType] = useState("grid");
  const [savedListOpen, setSavedListOpen] = useState(false);
  const [savedList, setSavedList] = useState([
    { family: "Open Sans", category: "sans-serif" },
    { family: "Roboto", category: "sans-serif" }
  ]);
  const [token, setToken] = useState({});
  const [user, setUser] = useState({});

  // Sends initial request to server to request fonts from api

  const [offset, setOffset] = useState(LOAD_ON_INIT);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    getPage(LOAD_ON_INIT);
  }, []);

  const getPage = async (offset = LOAD_ON_INIT) => {
    const res = await axios.get(`/fonts?offset=${offset}`);
    console.log(res.data.length, res.data);
    setListData(listData => [...listData, ...res.data]);
  };

  const handleSearch = async () => {
    setOffset(LOAD_ON_INIT);
    const newList = await axios.get(`/fonts/search?name=${searchQuery}`);
    console.log({ list: newList.data });
    setListData(newList.data);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    window.scrollY >= 88 && setFixedToTop(true);
    window.scrollY <= 88 && setFixedToTop(false);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  const scroll = event => {
    window.scrollY < 120 && setDisplayToTop(false);
    window.scrollY >= 120 && setDisplayToTop(true);
    window.scrollY >= 88 && setFixedToTop(true);
    window.scrollY <= 88 && setFixedToTop(false);
  };

  const reset = () => {
    setDisplayTextType("sentence");
    setDisplayText("Sphinx of black quartz, judge my vow.");
    setFontSize("32px");
    setThemeIsLight(true);
    setListType("grid");
  };

  const handleSearchInput = async e => {
    setSearchQuery(e.target.value);
    if (e.target.value.length === 0) {
      const res = await axios.get(`/fonts?offset=${LOAD_ON_INIT}`);
      console.log(res.data);
      setListData(res.data);
    }
  };

  return (
    <ThemeProvider theme={themeIsLight ? lightTheme : darkTheme}>
      <AppContainer>
        <Header
          user={user}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
        <Toolbar
          searchQuery={searchQuery}
          setSearchQuery={handleSearchInput}
          onSearchSubmit={handleSearch}
          toolbarFixedToTop={toolbarFixedToTop}
          displayTextType={displayTextType}
          setDisplayTextType={setDisplayTextType}
          displayText={displayText}
          setDisplayText={setDisplayText}
          fontSize={fontSize}
          setFontSize={setFontSize}
          reset={reset}
          themeIsLight={themeIsLight}
          setThemeIsLight={setThemeIsLight}
          listType={listType}
          setListType={setListType}
        />
        <Suspense fallback={<Loader />}>
          <FontList
            displayText={displayText}
            fontSize={fontSize}
            searchQuery={searchQuery}
            dataLoaded={dataLoaded}
            offset={offset}
            setOffset={setOffset}
            data={listData}
            getPage={getPage}
          />

          {displayToTop && (
            <ToTopButton
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <i className="fas fa-arrow-up"></i>
            </ToTopButton>
          )}
        </Suspense>
        {savedList.length >= 1 && (
          <SavedList
            savedList={savedList}
            setSavedList={setSavedList}
            savedListOpen={savedListOpen}
            setSavedListOpen={setSavedListOpen}
          />
        )}
        <Footer />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
