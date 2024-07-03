import React, { useState } from "react";
import TodoCards from "./TodoCards";
import AddTodoModal from "./AddTodoModal";
import TodoDropdown from "./TodoDropdown";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // Local state
  // const { todos } = useAppSelector((state) => state.todos);

  const [priority, setPriority] = useState("");

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);
  console.log(todos);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal></AddTodoModal>
        <TodoDropdown
          priority={priority}
          setPriority={setPriority}
        ></TodoDropdown>
      </div>
      <div className="bg-primary-gradient  w-full h-full p-3 rounded-xl ">
        <div className="bg-white w-full h-full rounded-lg p-5 space-y-2">
          {todos?.data?.map((item) => (
            <TodoCards key={item} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
