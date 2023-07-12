import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "namaste react :)"
// );
// console.log(heading);

const heading = (
  <h1 className="heading" tabIndex={1}>
    hi from jsx
  </h1>
);
console.log(heading);

//React component
//class based component
//Functional component
// const AppLayout = () => {
//   return (
//     <div className="app">
//       <h1>Hi Alpnaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

// root.render(<AppLayout />);
