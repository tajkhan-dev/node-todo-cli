import inquirer from 'inquirer';


const todo=async()=>{
    const {todo}=await inquirer.prompt(
        [
            {
                name:'todo',
                type:'input',
                message:'Write your todos'
                
            },
          
            
        ]
    )
    console.log("🚀 ~ file: app.ts:15 ~ todo ~ data:", todo)
    const todoList:string[]=[]
    todoList.push(todo)
    console.log("🚀 ~ file: app.ts:18 ~ todo ~ todoList:", todoList)
    
}
 

const repeat=async()=>{
    let repeat;
    do{
    await todo()
     repeat=await inquirer.prompt([
        {
            name:'repeat',
            type:'confirm',
            message:'do want to add more'
        }
    ])

}while(repeat==="Yes" || repeat==="Y")
}
repeat()