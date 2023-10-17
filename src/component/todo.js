import React, { useState } from "react";
// import todo from "../images/todo.svg";
import "../App.css";

function Todo() {
  // const [inputData, setInputData] = useState("");
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            {/* <img src={todo} alt="todologo" /> */}
            <figcaption>Add your List</figcaption>
          </figure>

          <div className="=addItems">
            <input type="text" placeholder="✍️ Add Items"></input>
            <i className="fa fa-plus add-btn" title="Add Item"></i>
          </div>

          <div className="showItems">
            <div className="eachItems">
              <h3>Appple</h3>
              <i className="fa-trash-alt add-btn" title="Delete"></i>
            </div>
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
