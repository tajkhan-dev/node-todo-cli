import inquirer from "inquirer";

const todoList: string[] = [];
const todo = async () => {
  const { todo } = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "Write your todos",
    },
  ]);

  todoList.push(todo);
  console.log("todolist", todoList);
};

const repeat = async () => {
  let repeat;
  do {
    await todo();
    repeat = await inquirer.prompt([
      {
        name: "repeat",
        type: "confirm",
        message: "do want to add more",
      },
    ]);
  } while (repeat.repeat);
};
repeat();
