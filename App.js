const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/* 
<div id='parent'>
    <div id='child'>
        <h1>I am H1</h1>
        <h2>I am H2</h2>
    </div>
    <div id='child2'>
        <h1>I am H1</h1>
        <h2>I am H2</h2>
    </div>
    
</div>
*/
