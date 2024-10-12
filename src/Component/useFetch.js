import axios from "axios";
import {useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get(url)
        .then(res => setData (data))
        .catch(err => console.error(err))
    },[url]);

    return{data}
};

export default useFetch;