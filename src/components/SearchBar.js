import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
          type="text"
          id="header-search"
          placeholder="Search the Classiest of Holes."
          name="s"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
