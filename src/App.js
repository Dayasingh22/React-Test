import React from "react";
import useState from "./use-history";
import "./App.css";
import styles from "styled-components";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Box = styles.div`
 width: 105px;
  height: 105px;
  border: 2px solid #fff;
  background-color: #ccc;
  cursor: pointer;

  &.active{
    background-color: ${getRandomColor};
  }
`;

function App() {
  const { state, set } = useState({});

  return (
    <div className="App">
      <div className="container">
        <div className="grid">
          {((blocks, i, len) => {
            while (++i <= len) {
              const index = i;
              blocks.push(
                <Box
                  className={state[index] || state[index + 1] ? " active" : ""}
                  onClick={() => set({ ...state, [index]: !state[index] })}
                  key={i}
                />
              );
            }
            return blocks;
          })([], 0, 98)}
        </div>
      </div>
    </div>
  );
}

export default App;
