import React from "react";
import Helmet from "react-helmet";
import Card from "./font-card.styles";

const FontCard = ({ displayText, fontSize, fontFamily, category }) => {
  const arr300 = ["Open Sans Condensed", "Sunflower"];
  let search = fontFamily.split(" ").join("+");
  if (arr300.includes(fontFamily)) {
    search += ":300";
  }
  let link = `https://fonts.googleapis.com/css?family=${search}&display=swap`;
  let backup;
  if (category === "handwriting" || "display") {
    backup = "cursive";
  }
  if (category) {
    backup = "monospace";
  } else backup = category;

  return (
    <Card.Container fontSize={fontSize} fontFamily={fontFamily}>
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
        <i className="fas fa-plus-circle"></i>
      </Card.TitleBar>
      <Card.SubTitle>{category}</Card.SubTitle>
      <p style={{ fontFamily: `${fontFamily}, ${backup}`, fontSize: fontSize }}>
        {displayText}
      </p>
    </Card.Container>
  );
};
export default FontCard;
