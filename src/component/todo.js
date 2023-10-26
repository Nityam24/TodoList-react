import React, { useEffect, useState } from "react";
// import todo from "../images/todo.svg";
import "../App.css";

//to get data from LS

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log(list);

  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setisEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleSubmit) {
      setItems(items.map(elem) =>{
        if(elem.id==isEditItem){
          return {...elem, name: inputData}
        }
        
      });
    } else {
      const allInputData = {
        id: new Date().getTime.toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    console.log(id);
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id == id;
    });
    console.log(newEditItem);

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setisEditItem(id);
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            {/* <img src={todo} alt="todologo" /> */}
            <figcaption>Add your List</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="far fa-edit add-btn"
                title="update Item"
                onClick={addItem}
              ></i>
            )}
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa-edit add-btn"
                      title="Delete"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="fa-trash-alt add-btn"
                      title="Delete"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
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
