import axios from 'axios'
import React, { useEffect, useState } from "react";

const useRequest = (url) => {
  const [requestState, setRequestState] = useState({
    data: null,
    error: null,
    loading: false,
  });

  useEffect( () => {
    setRequestState((prev)=> {
        return {...prev,loading:true}
    })
    async function getData(params) {
        const resp = await axios.get(url);
        return resp.data;
    }

    getData()
    .then((data)=>{
      console.log(data);
    })
    .catch(err => console.log(err))

    // We cancel the rquest whe the component unmount
    return () => {
      
    }
  }, [url])
  
};

export default useRequest;
