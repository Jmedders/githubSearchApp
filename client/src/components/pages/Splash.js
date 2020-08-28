import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";

export default function Splash() {
  const [searchVal, setSearchVal] = useState("");
  const [filterVal, setFilterVal] = useState("");
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
    </>
  );
}
