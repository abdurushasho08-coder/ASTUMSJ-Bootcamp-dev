import { useState } from "react";
import ColorButton from "./ColorButton";
import ColorPreview from "./ColorPreview";
import "./App.css";

function App() {
  const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="container">
      <h1>Color Picker</h1>

      <div className="buttons">
        {colors.map((color) => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => setSelectedColor(color)}
            isSelected={selectedColor === color}
          />
        ))}
      </div>

      {selectedColor ? (
        <ColorPreview color={selectedColor} />
      ) : (
        <p>No color selected yet</p>
      )}

      <button
        className="reset"
        onClick={() => setSelectedColor("")}
      >
        Reset
      </button>
    </div>
  );
}

export default App;