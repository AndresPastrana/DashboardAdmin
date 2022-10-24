import React, { useContext } from "react";
import { DataContext } from "../context/Data/DataContext";

const useStore = () => {
  const store = useContext(DataContext);
  return [store.get(), store.set];
};

export default useStore;
