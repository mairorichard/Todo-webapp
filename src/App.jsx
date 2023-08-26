import React, { useState } from "react";
import Check from "./assets/images/icon-check.svg";
import Bgdesktop from "./assets/images/bg-desktop-dark.jpg";
import Bgdesktoplight from "./assets/images/bg-desktop-light.jpg";
import Sun from "./assets/images/icon-sun.svg";
import Moon from "./assets/images/icon-moon.svg";
import Del from "./assets/images/icon-cross.svg";
import ToDo from "./todo";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const [todoText, setTodoText] = useState("");

  const [filter, setFilter] = useState(null);

  const [active, setActive] = useState("all");

  const [dark, setDark] = useState(true);

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

  const filteredTodos = toDoList.filter((todo) => {
    if (filter === true) return todo.completed;
    if (filter === false) return !todo.completed;
    return true; // 'all' filter, include all todos
  });

  const clearCompletedTodos = () => {
    const uncompletedTodos = toDoList.filter((todo) => !todo.completed);
    setToDoList(uncompletedTodos);
    alert("All completed ToDos have been cleared");
  };

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <div
      className={`${
        dark ? "bg-verydarkgrayblue" : "bg-lightbg"
      } h-[100vh] flex flex-col items-center`}
    >
      {/* top image */}
      <div className="bg-cover bg-center">
        {dark ? (
          <img src={Bgdesktop} alt="" />
        ) : (
          <img src={Bgdesktoplight} alt="" />
        )}
      </div>

      {/* /top image */}

      <div className="lg:mt-[-16rem]  md:w-[40%] flex flex-col mx-5">
        {/* top */}
        <div className={`text-white flex items-center justify-between`}>
          <h1 className="text-4xl font-semibold tracking-[1rem]">TODO</h1>

          {/* toggle dark mode */}
          <div className="cursor-pointer" onClick={toggleDarkMode}>
            {dark ? <img src={Sun} alt="" /> : <img src={Moon} alt="" />}
          </div>
        </div>

        {/* /top */}

        {/* create new todo */}

        <div
          className={`flex px-6 py-4 ${
            dark ? "bg-darkgrayblue2" : "bg-verylightgray"
          } items-center gap-5 mt-5 rounded-md shadow-2xl`}
        >
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
              className={`w-full bg-transparent ${
                dark ? "text-white" : "text-slate-700"
              } sm:text-sm focus:outline-none`}
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
          </div>
        </div>

        {/* /create new todo */}

        {/* todo list */}

        <div
          className={`py-4 ${
            dark ? "bg-darkgrayblue2" : "bg-verylightgray"
          } mt-8 rounded-md shadow-2xl`}
        >
          <div className="flex flex-col gap-4 max-h-[16rem] overflow-y-scroll">
            {filteredTodos.map((item, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <div className="flex items-center gap-5 px-6">
                    {" "}
                    {/* check box */}
                    <div className="">
                      <div
                        className={`h-6 w-6 border border-brightblue rounded-full cursor-pointer flex items-center justify-center ${
                          item.completed ? "bg-brightblue" : ""
                        }`}
                        onClick={() => toggleTodo(index)}
                      >
                        <div
                          className={`${item.completed ? "block" : "hidden"}`}
                        >
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
                          className={`${
                            dark && !item.completed
                              ? "text-white"
                              : "text-slate-600"
                          } ${
                            item.completed ? "line-through text-slate-500" : ""
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
                  <div
                    className={`h-[1px] w-full ${
                      dark ? "bg-slate-600" : "bg-slate-300"
                    } my-4`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="px-6 text-slate-500 text-sm flex justify-between items-center">
            {/* items left */}
            <div className="">
              <p>
                {filteredTodos.length} {toDoList.length <= 1 ? "item" : "items"}{" "}
                left
              </p>
            </div>

            {/* states */}
            <div className="cursor-pointer flex gap-2">
              <span
                className={`${
                  active === "all"
                    ? "text-brightblue font-medium"
                    : "hover:text-slate-300"
                } `}
                onClick={() => {
                  setFilter(null);
                  setActive("all");
                }}
              >
                All
              </span>
              <span
                onClick={() => {
                  setFilter(false);
                  setActive("active");
                }}
                className={`${
                  active === "active"
                    ? "text-brightblue font-medium"
                    : "hover:text-slate-300"
                }`}
              >
                Active
              </span>
              <span
                className={`${
                  active === "completed"
                    ? "text-brightblue font-medium"
                    : "hover:text-slate-300"
                }`}
                onClick={() => {
                  setFilter(true);
                  setActive("completed");
                }}
              >
                Completed
              </span>
            </div>

            {/* clear */}
            <div className="">
              <span
                className="hover:text-slate-300 cursor-pointer"
                onClick={clearCompletedTodos}
              >
                Clear Completed
              </span>
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
