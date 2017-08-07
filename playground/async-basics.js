console.log("Starting app");

setTimeout(() => {
  console.log("Inside of callback");
}, 2000);

setTimeout(() => {
  console.log("Let's see what happens");
}, 0);

console.log("Finishing up");
