function ColorPreview({ color }) {
  return (
    <div className="preview-container">
      <div
        className="preview-box"
        style={{ backgroundColor: color }}
      ></div>

      <h2>{color}</h2>
    </div>
  );
}

export default ColorPreview;