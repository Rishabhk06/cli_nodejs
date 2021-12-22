const commander = require("commander");
const { displayTasks, addNewTask, deleteTask } = require("./commandActions.js");

//ls : Show incomplete tasks
commander
  .command("ls")
  .description("Show incomplete tasks")
  .action(() => {
    displayTasks();
  });

//add : Add new tasks
commander
  .command("add <priority> <desc>")
  .description("Add new tasks")
  .action((priority, desc) => {
    addNewTask(priority, desc);
  });

//del : Delete task by index
commander
  .command("add <index>")
  .description("Delete task")
  .action((delIndex) => {
    deleteTask(delIndex);
  });

commander.parse(process.argv);
