import React from "react";
import Helmet from "react-helmet";
import Card from "./font-card.styles";

const FontCard = ({
  displayText,
  fontSize,
  fontFamily,
  category,
  saved,
  setSavedList,
  listType
}) => {
  const arr300 = ["Open Sans Condensed", "Sunflower"];
  let search = fontFamily.split(" ").join("+");
  if (arr300.includes(fontFamily)) {
    search += ":300";
  }
  let link = `https://fonts.googleapis.com/css?family=${search}&display=swap`;
  let backup;
  if (category === "handwriting" || "display") {
    backup = "cursive";
  } else backup = category;
  return (
    <Card.Container
      cardType={listType}
      fontSize={fontSize}
      fontFamily={fontFamily}
    >
      <Helmet>
        <link
          href={link}
          rel="stylesheet"
          media="none"
          onload="if(media!='all')media='all'"
        />
      </Helmet>
      <Card.TitleBar>
        <h2>{fontFamily}</h2>
        {!saved && (
          <div
            className="Add"
            onClick={() => {
              setSavedList(savedList => [
                ...savedList,
                { family: fontFamily, category }
              ]);
            }}
          >
            <i className="fal fa-plus-circle"></i>
          </div>
        )}
        {saved && (
          <div
            className="Remove"
            onClick={() =>
              setSavedList(savedList =>
                savedList.filter(font => font.family !== fontFamily)
              )
            }
          >
            <i className="fas fa-minus-circle"></i>
          </div>
        )}
      </Card.TitleBar>
      <Card.SubTitle>{category}</Card.SubTitle>
      <p style={{ fontFamily: `${fontFamily}, ${backup}`, fontSize: fontSize }}>
        {displayText}
      </p>
    </Card.Container>
  );
};
export default FontCard;
