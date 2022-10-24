import { useCallback, useRef } from "react";

export const useDataStore = () => {
  const store = useRef({
    bussines: [],
    categories: [],
    allProducts: [],
    subCategories: [],
    activeSubcategory: {},
  });

   const getStore = useCallback(() => store,[]);

  const setStore = useCallback((partialStore) => {
    store.current = {...store.current ,...partialStore};
  },[]);

  const suscribers = useRef(new Set())

  const suscribe = useCallback((callback)=>{
      suscribers.current.add(callback);
      return ()=>{
        suscribers.current.delete(callback);
      }
  },[])

  suscribe(()=>{
    
  })
 

  return { getStore, setStore, suscribe};
};
