import React, { useState } from "react";

const Component = (props) => {
    
    const [error, setError] = useState(false);

    const errorGenerator = () =>{
      setError(true);

      throw new Error('Uncought error');
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
