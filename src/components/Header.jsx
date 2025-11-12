import React, { useContext } from "react";
import MyContext from "../contexts/ProductContext";

export default function Header() {
  const { onTextChange } = useContext(MyContext);

  const onChange = (event) => {
    if (event.key === "Enter") {
      onTextChange(event.target.value);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        backgroundColor: "#e4e4e4",
      }}
    >
      <div>
        <span>Logo</span>
      </div>
      <div>
        <input placeholder="Search here..." onKeyPress={onChange} />
      </div>
    </div>
  );
}