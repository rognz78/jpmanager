import React, { useState, useEffect } from "react";
import axios from "axios";

 function Count() {
    const [count, setCount] = useState();
    
    useEffect(() => {
      getCount();
    }, []);

    const getCount = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setCount(result.data.length);
    }
    return (
        <>
           {count} 
        </>
    )
}

export default Count ;
