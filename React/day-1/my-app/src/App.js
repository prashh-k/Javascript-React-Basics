//Functional component

// function App() {
//   let print = function () {
//     console.log("print");
//   };
//   return (
//     <>
//       <center>
//         <h1> Hello </h1>
//         <button onClick = {print}  > Button </button>
//       </center>
//     </>
//   );
// }


// class component

import React from "react" ;

class App extends React.Component {
  print = () => {
    console.log(this);
  };

  render() {
    return (
      <>
        <center>
          <h1> Hello </h1>
          <button onClick = {this.print}  > Button </button>
        </center>
      </>
    );
  }  
}

export default App;