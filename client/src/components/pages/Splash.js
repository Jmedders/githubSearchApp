import React, { useState } from "react";
import InputSearch from "../Search/InputSearch";
import Filter from "../Search/Filter";
import Sort from "../Search/Sort";
import { useSearch } from "../../context/search-context";

export default function Splash() {
  return (
    <>
      <InputSearch />
      <Filter />
      <Sort />
    </>
  );
}
