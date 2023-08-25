import React, { useState } from "react";
import Check from "./assets/images/icon-check.svg";
import Bgdesktop from "./assets/images/bg-desktop-dark.jpg";
import Sun from "./assets/images/icon-sun.svg";
import Del from "./assets/images/icon-cross.svg";
import ToDo from "./todo";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const [todoText, setTodoText] = useState("");

  const addToDo = () => {
    if (todoText.trim() === "") {
      alert("You cannot add an empty ToDo");
      return;
    }
    setToDoList((prev) => [...prev, { text: todoText, completed: false }]);
    setTodoText("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...toDoList];
    newTodos[index].completed = !newTodos[index].completed;
    setToDoList(newTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = toDoList.filter((_, i) => i !== index);
    setToDoList(updatedTodos);
  };

  return (
    <div className="bg-verydarkgrayblue h-[100vh] flex flex-col items-center">
      {/* top image */}
      <div className="bg-cover bg-center">
        <img src={Bgdesktop} alt="" />
      </div>

      {/* /top image */}

      <div className="lg:mt-[-16rem]  md:w-[40%] flex flex-col mx-5">
        {/* top */}
        <div className="text-white flex items-center justify-between">
          <h1 className="text-4xl font-semibold tracking-[1rem]">TODO</h1>
          <div className="">
            <img src={Sun} alt="" />
          </div>
        </div>

        {/* /top */}

        {/* create new todo */}

        <div className="flex px-6 py-4 bg-darkgrayblue2 items-center gap-5 mt-5 rounded-md shadow-2xl">
          {/* check box */}
          <div
            className="h-6 w-6 border border-brightblue rounded-full cursor-pointer"
            onClick={addToDo}
          ></div>
          {/* /check box */}

          <div className="w-full">
            <input
              type="text"
              name="todo"
              id="todo"
              placeholder="Create new Todo"
              className="w-full bg-transparent text-white sm:text-sm focus:outline-none"
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
          </div>
        </div>

        {/* /create new todo */}

        {/* todo list */}

        <div className="py-4 bg-darkgrayblue2 mt-8 rounded-md shadow-2xl ">
          <div className="flex flex-col gap-4 max-h-[16rem] overflow-y-scroll">
            {toDoList.map((item, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <div className="flex items-center gap-5 px-6">
                    {" "}
                    {/* check box */}
                    <div className="">
                      <div
                        className={`h-6 w-6 border border-brightblue rounded-full cursor-pointer flex items-center justify-center `}
                        onClick={() => toggleTodo(index)}
                      >
                        <div className="hidden">
                          <img src={Check} alt="" />
                        </div>
                      </div>
                    </div>
                    {/* /check box */}
                    <div className="flex items-center justify-between w-full">
                      {" "}
                      {/* todo */}
                      <div className="w-full">
                        <p
                          className={`text-white ${
                            toDoList.completed ? "line-through" : ""
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                      {/* /todo */}
                      {/* delete icon */}
                      <div onClick={() => removeTodo(index)}>
                        <img src={Del} alt="" />
                      </div>
                      {/* /delete icon */}
                    </div>
                  </div>

                  {/* Line */}
                  <div className="h-[1px] w-full bg-slate-600 my-4"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="px-6 text-slate-500 text-sm flex justify-between items-center">
            {/* items left */}
            <div className="">
              <p>
                {toDoList.length} {toDoList.length <= 1 ? "item" : "items"} left
              </p>
            </div>

            {/* states */}
            <div className="font-medium flex gap-2">
              <span className="text-brightblue">All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>

            {/* clear */}
            <div className="">
              <span>Clear Completed</span>
            </div>
          </div>
        </div>

        {/* /todo list */}

        <div className="self-center mt-3">
          <p className="text-purple-500 text-sm">mairo</p>
        </div>
      </div>
    </div>
  );
}

export default App;
