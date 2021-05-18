import React from "react";

const SearchResult = (props) => {
    const imgsrc = `https://source.unsplash.com/400x300/?${props.name}`;
  return (
    <>
      <div>
        <img src={imgsrc} alt="img"/>
      </div>
    </>
  );
};
export default SearchResult;
