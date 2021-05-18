import React, { useState } from "react";
import SearchResult from './SearchResult';

const Search = () => {
  const [img, setImg] = useState();

  const inputEvent = (event)=>{
    const data = event.target.value;
    
    console.log(data);
    setImg(data);
  }
  return (
    <>
      <h2>Search component</h2>
      <div className="searchbar">
        <input type="text" onChange={inputEvent} value= {img} placeholder="search anything" />
        {img === '' ? null :
        <SearchResult name={img}/>
        }
      </div>
    </>
  );
};

export default Search;
