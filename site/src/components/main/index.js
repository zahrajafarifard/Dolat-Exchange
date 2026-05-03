import React from "react";

import Links from "./Links";
import GalleryForms from "./gallery";
// import Rules from "./rules";
// import News from "./news";
import RelatedLinks from "./relatedLinks";
// import CommonQuestions from "./commonQuestions";
// import Froms from "./forms";
const Main = () => {
  return (
    <div>
      <Links />
      <GalleryForms />
      {/* <Froms /> */}
      {/* <Rules /> */}
      {/* <News /> */}
      {/* <CommonQuestions /> */}
      <RelatedLinks />
    </div>
  );
};

export default Main;
