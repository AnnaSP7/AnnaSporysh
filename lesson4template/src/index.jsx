import './style.scss';
import React from "react";
import { createRoot } from 'react-dom/client';

// const UI = React.createElement(
//     "div",
//     {
//       style: { background: "yellow" },
//     },
//     React.createElement(
//       "button",
//       {
//         onClick: () => console.log("Click"),
//       },
//       "Click me"
//     ),
//     React.createElement("span", {}, "Some text")
//   );
  /*
    <div style="background: yellow;">
      <button onclick="console.log('Click')">
         Click me
      </button>
      <span>Some text</span>
    </div>
  */

// const UI = (
//   <div style={{ background: "yellow" }}>
//     <button onclick={() => console.log("Click")}>
//       Click me
//     </button>
//     <span>Some text</span>
//     </div>
//   )

// const root = createRoot(document.getElementById("app"));
// root.render(UI);

const Button = (props) => {
  const { text, variant } = props;
  const className = `my-button ${ variant }`
  return (
        <button className="my-button" onClick={() => console.log('Click')}>
            {text}
    </button>
  )
}
const App = () => {
  return (
    <div>
        <Button text="Hello" variant=""/>
      <p>Some text</p>
      <Button text="Error" variant="button-error"/>
    </div>
  );
}

const app = document.getElementById("app");
createRoot(app).render(<App />);
  
