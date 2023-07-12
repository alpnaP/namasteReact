/**
 * <div id= "parent">
 * <div id-"child">
 * <h1>I am sub child <h1>
 * <h2>I am sub child <h2>
 * <div>
 *  *<div id-"child2">
 * <h1>I am sub child <h1>
 * <h2>I am sub child <h2>
 * <div>
 *
 * <div>
 *
 * createElement(return Object)= HTML (browser understands)
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "key1" }, "I am super child"),
    React.createElement("h2", { id: "key2" }, "I am super child 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "key1" }, "I am super child"),
    React.createElement("h2", { id: "key2" }, "I am super child 2"),
  ]),
]);

//JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from React"
// );

console.log(parent); // returns object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
