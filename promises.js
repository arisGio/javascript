// to run only this js file execute: node promises.js

const event = new Promise((resolve, reject) => {
  let name = "VALID NAME";
  if (name == "Pedro") {
    resolve(name);
  } else {
    reject("name is not Pedro");
  }
});

event
  .then((name) => {
    console.log(name);
    // throw console.error();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("PROMISE FINISHED");
  });
