//fetch api

fetch("todos/bolo.json")
  .then(response => {
    console.log("resolved", response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("rejected", err);
  });

//chaining promises

// const getTodos = resource => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       //console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error, getting resource");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/bolo.json")
//   .then(data => {
//     console.log("promise 1 resolved:", data);
//     return getTodos("todos/luigi.json");
//   })
//   .then(data => {
//     console.log("promise 2 resolved:", data);
//     return getTodos("todos/todos.json");
//   })
//   .then(data => {
//     console.log("promise 3 resolved", data);
//   })
//   .catch(err => {
//     console.log("promise rejected:", err);
//   });

//promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     resolve("some data");
//     //reject("some error");
//   });
// };

// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   err => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
