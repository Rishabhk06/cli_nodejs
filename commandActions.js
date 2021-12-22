const fs = require("fs");

getIncompleteTasks = () => {
  //Read incomplete tasks from task.txt
  return fs.readFileSync("./task.txt", "utf-8").split("\n");
};

displayTasks = () => {
  const incompleteTasks = getIncompleteTasks();

  incompleteTasks.forEach((i, index) => {
    console.log(`${index + 1}. ` + i);
  });
};

addNewTask = (priority, desc) => {
  console.log("addNewTask called");
  console.log(priority, desc);
  //Add new tasks from task.txt
  fs.appendFile("./task.txt", "\n" + `${desc} [${priority}]`, (err) => {
    if (err) throw err;
    console.log("New Task added");
  });
};

deleteTask = (delIndex) => {
  let incompleteTasks = getIncompleteTasks();

  if (delIndex > 0 && delIndex <= incompleteTasks.length) {
    //Remove that line
    incompleteTasks.splice(delIndex - 1, 1);
    let linesExceptdelIndex = incompleteTasks.join("\n");

    //Write overwrites file contents
    fs.writeFileSync("./task.txt", linesExceptdelIndex);
  } else {
    console.log(
      `Error: item with index ${delIndex} does not exist. Nothing deleted.`
    );
  }
};

module.exports = { getIncompleteTasks, addNewTask, displayTasks, deleteTask };
