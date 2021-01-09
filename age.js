let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you?\n"));
console.log(`In ten years you will be ${age + 10}`);
console.log(`In twenty years you will be ${age + 20}`);
console.log(`In thirty years you will be ${age + 30}`);