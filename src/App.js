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

//React component
//class based component
//Functional component

// const HeadingComponent2 = () => {
//   <h1>short syntax</h1>;
// };

const title = <h1 className="title">Namamste reat using JSX</h1>;

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h1>return syntax</h1>
  </div>
);

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <h1>Hi Alpnaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
//     </div>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// root.render(<AppLayout />);
