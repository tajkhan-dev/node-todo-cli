import inquirer from 'inquirer';
const todo = async () => {
    const { todo } = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'Write your todos'
        },
    ]);
    console.log("🚀 ~ file: app.ts:15 ~ todo ~ data:", todo);
    const todoList = [];
    todoList.push(todo);
    console.log("🚀 ~ file: app.ts:18 ~ todo ~ todoList:", todoList);
};
todo();
