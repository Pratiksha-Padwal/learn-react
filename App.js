/*
<div id="parent">
<div id="child">
<h1>I'm h1 tag</h1>
<h2>I'm h1 tag</h2>
</div>
</div>

*/
// const heading1 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I'm H1 Tag"),
//     React.createElement("h2", {}, "I'm H2 Tag"),
//   ])
// );

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "pp" },
  "Hello World from React"
); //it's an object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //it creates h1 tag and puts it into root
