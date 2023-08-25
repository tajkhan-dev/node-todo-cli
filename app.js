import inquirer from "inquirer";
const todoList = [];
const todo = async () => {
    const { todo } = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Write your todos",
        },
    ]);
    console.log("🚀 ~ file: app.ts:15 ~ todo ~ data:", todo);
    todoList.push(todo);
};
console.log("todolist", todoList);
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
