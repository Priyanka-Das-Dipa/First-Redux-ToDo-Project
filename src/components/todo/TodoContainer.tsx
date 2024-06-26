import React from "react";
import TodoCards from "./TodoCards";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoDropdown from "./TodoDropdown";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal></AddTodoModal>
        <TodoDropdown></TodoDropdown>
      </div>
      <div className="bg-primary-gradient  w-full h-full p-3 rounded-xl ">
        <div className="bg-white w-full h-full rounded-lg p-5 space-y-2">
          <TodoCards />
          <TodoCards />
          <TodoCards />
          <TodoCards />
          <TodoCards />
        </div>
        {/* <div className="bg-white text-2xl p-3 font-bold text-2xl flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
