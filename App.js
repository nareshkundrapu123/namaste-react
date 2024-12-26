// const heading = React.createElement("h1",{id: "heading"},"Hello World from React Js");

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child"},
       [ React.createElement(
            "h1",
            {},"i'm in H1 tag React"),
            React.createElement("h2",{},"i'm in H2 tag")] 
    ),React.createElement(
        "div",
        {id: "child1"},
       [ React.createElement(
            "h1",
            {},"i'm in H1 tag React"),
            React.createElement("h2",{},"i'm in H2 tag")] 
    )]
);    


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
