import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold text-2xl my-5">Todo page</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
