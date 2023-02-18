import React, { createContext, useState } from "react";

export const PictureContext = createContext();
const PictureContextProvider = (props) => {
  const [picture, setPicture] = useState("");
  return (
    <PictureContext.Provider value={{ picture, setPicture }}>
      {props.children}
    </PictureContext.Provider>
  );
};

export default PictureContextProvider;
