import chalk from "chalk";
import readlineSync from "readline-sync";

console.log("\n\n" + new Array(20).join(" ") + "Welcome to task module\n");

const tasks = ["Lion", "Elephant", "Crocodile", "Giraffe"];
let bye = false;
while (true) {
  tasks.forEach((element, index) => {
    console.log(`[${index}] ${element}`);
  });

  console.log(chalk.blue(
   'Typing the action you want to execute: ["add", "remove", "update", "bye"] '
  ));

  readlineSync.promptCLLoop({
    add: function (target) {
      console.log(target);
      tasks.push(target);
      return true;
    },
    remove: function (target) {
      const index = readlineSync.keyInSelect(
        tasks,
        "Which task do you want to remove?"
      );
      if (index >= 0) {
        tasks.splice(index, 1);
        console.log(index + " is removed.");
      }
      return true;
    },
    update: (target) => {
      const index = readlineSync.keyInSelect(
        tasks,
        "Which task do you want to update?"
      );
      if (index >= 0) {
        console.log("updating ", target, " on index ", index);
        tasks[index] = target;
      }
      return true;
    },
    bye: function () {
      bye = true;
      return true;
    },
  });

  if (bye) {
    console.log("Exited ");
    break;
  }
}
