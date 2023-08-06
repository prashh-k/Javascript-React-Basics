//import React from 'react';

//for hooks can also write 

import { useState } from 'react' ;

const App = () => {

  let [text, setText ] = useState("-");

   let changeText = (event) => { 
    if (event.key  === "Enter") {
      setText(event.target.value);
    }
  //   setText(event.target.value);
  
  };

  return (
    <>
      <input type="text"  onKeyUp={changeText}/>
      {/* <input type="text"  onChange={changeText}/> */}

      {/* <button 
      onClick={changeText} 
      className="btn btn-outline-primary rounded-0 btn-sm  ">Change Text </button> */}

      <h1>Here is  your text. :: {text} </h1>
       
    </>
  );
};

export default App ;