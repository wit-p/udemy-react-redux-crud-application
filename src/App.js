import React, { Component } from 'react';

// クラスComponent
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//     // const greeting = "Hi, Tom!";
//     // const dom = <h1>{greeting}</h1>;
//     // return dom;
//   }
// }

// ファンクショナルComponent
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
