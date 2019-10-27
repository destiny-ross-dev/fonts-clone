import React, { Suspense, useEffect } from "react";
import FontListStyles from "./font-list.styles";
import Loader from "../loader/loader.component";
import { LOAD_ON_SCROLL, LOAD_ON_INIT } from "../../config";

const FontCard = React.lazy(() => import("../font-card/font-card.component"));
const FontList = ({
  data,
  displayText,
  fontSize,
  searchQuery,
  setOffset,
  offset,
  getPage,
  savedList,
  setSavedList
}) => {
  useEffect(() => {
    const loadMore = () => {
      if (searchQuery !== "") {
        setOffset(LOAD_ON_INIT);
        return;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight * 0.9
      ) {
        console.log({ offset }, { next: offset + LOAD_ON_SCROLL });
        getPage(offset + LOAD_ON_SCROLL);
        setOffset(offset + LOAD_ON_SCROLL);
      }
    };

    window.addEventListener("scroll", loadMore);
    return () => {
      window.removeEventListener("scroll", loadMore);
    };
  }, [searchQuery, offset, setOffset, getPage]);

  return (
    <FontListStyles.Container>
      <h2>
        Viewing <span>{data.length}</span> of 960 Total Fonts
      </h2>

      <Suspense fallback={<Loader />}>
        {data.map((e, i) => {
          return (
            <FontCard
              key={i}
              displayText={displayText}
              fontSize={fontSize}
              fontFamily={e.family}
              category={e.category}
              setSavedList={setSavedList}
              saved={savedList.some(font => font.family === e.family)}
            />
          );
        })}
      </Suspense>
    </FontListStyles.Container>
  );
};

export default FontList;
