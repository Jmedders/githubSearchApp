import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";

export default function Splash() {
  const [searchVal, setSearchVal] = useState("");
  const handleInputChange = ({ target: { value } }) => {
    setSearchVal(value);
  };
  return (
    <>
      <InputSearch handleChange={handleInputChange} val={searchVal} />
    </>
  );
}
