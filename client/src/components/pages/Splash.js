import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";
import Sort from "../Search/Sort";

export default function Splash() {
  const [searchVal, setSearchVal] = useState("");
  const [filterVal, setFilterVal] = useState("");
  const [sortVal, setSortVal] = useState("");
  const handleInputChange = ({ target: { value } }) => {
    setSearchVal(value);
  };
  return (
    <>
      <InputSearch handleChange={handleInputChange} val={searchVal} />
      <Filter
        val={filterVal}
        handleChange={({ target }) => setFilterVal(target.value)}
      />
      <Sort
        val={sortVal}
        handleChange={({ target }) => setSortVal(target.value)}
      />
    </>
  );
}
