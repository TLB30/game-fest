import React, { useEffect, useState } from "react";
import "../style/filter.css";
import Slider from "./Slider";

const Filter = () => {
  const [label, setLabel] = useState("all");
  console.log(label);
  function handleFilter(e) {
    const labelElement = e.closest(".sidebar-label");
    const textElement = labelElement.querySelector(".text");
    const filterText = textElement.innerText.toLowerCase();
    setLabel(filterText);
  }
  useEffect(() => {
    const clickCheck = document.querySelectorAll(".filter-content");
    clickCheck.forEach((element) => {
      element.addEventListener("click", (e) => handleFilter(e.target));
    });

    return clickCheck.forEach((element) => {
      element.removeEventListener("click", (e) => handleFilter(e.target));
    });
  }, []);
  return (
    <>
      {/*  */}
      <div className="filter-content">
        <h2>Category</h2>
        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>
        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">steam</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">origin</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Mouse</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Keyboard</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Controller cover</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="category" />
          <span className="checkbox"></span>
          <span className="text">Console stand</span>
        </label>
      </div>
      {/*  */}
      <div className="filter-content">
        <h2>Section</h2>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">Gift cards</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="section" />
          <span className="checkbox"></span>
          <span className="text">Accessories</span>
        </label>
      </div>
      {/*  */}
      <div className="filter-content">
        <h2>Platform</h2>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">All</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">PC</span>
        </label>

        <label className="sidebar-label">
          <input type="radio" className="input" name="platform" />
          <span className="checkbox"></span>
          <span className="text">Console</span>
        </label>
        <Slider />
      </div>
    </>
  );
};

export default Filter;