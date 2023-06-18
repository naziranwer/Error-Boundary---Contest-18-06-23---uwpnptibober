import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

    const errorGenerator = () =>{
      try{
      setError(true);

      throw new Error('Uncought error');
      }
      catch{
        console.error(error);
      }
    }

  return (
    <>
    <button id="gen" onClick={errorGenerator}>Generate Error</button>
    {    
        error && <div>{somethingNotDefined}</div>
    }
    </>
  );
};

export default Component;
