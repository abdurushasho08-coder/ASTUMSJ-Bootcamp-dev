function ColorButton({ color, onClick, isSelected }) {
  return (
    <button
      onClick={onClick}
      className={isSelected ? "color-button active" : "color-button"}
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
}

export default ColorButton;