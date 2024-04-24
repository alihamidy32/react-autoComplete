import { useState } from "react";
import "../src/style.css";
export default function InputAuto({
  placeholder,
  data,
  onSelected,
  onChange,
  loading,
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [isHideSuggestion, setIsHideSuggestion] = useState(false);
  const [selectedVal, setSelectedVal] = useState("");

  const handler = (e) => {
    setSuggestions(data.filter((i) => i.startsWith(e.target.value)));
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setIsHideSuggestion(false);
    setSelectedVal(input);
    onChange(input);
  };

  const hideSuggestion = (value) => {
    onSelected(value);
    setSelectedVal(value);
    setIsHideSuggestion(true);
  };

  return (
    <div className="suggestion-auto">
      <div className="form-control-auto">
        {loading ? <i className="fas fa-spinner fa-spin"></i> : null}
        <input
          placeholder={placeholder}
          type="search"
          value={selectedVal}
          onChange={handleChange}
          onKeyUp={handler}
        />
      </div>

      <div
        className="suggestions"
        style={{ display: isHideSuggestion ? "none" : "block" }}
      >
        {suggestions.map((item, idx) => (
          <div
            key={"" + item + idx}
            onClick={() => {
              hideSuggestion(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
