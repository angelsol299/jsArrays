const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status == 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch match data", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};

//promise example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    //resolve("some data");
    reject("some error");
  });
};

getSomething().then(
  data => {
    console.log(data);
  },
  err => {
    console.log(err);
  }
);
