//GET method in javascript simple
const apiURL1 = "https://jsonplaceholder.typicode.com/users";

fetch(apiURL1)
  .then((res) => {
    if (res.status == 200 || res.status == 201) {
      return res.json();
    } else {
      throw new Error("failed to fetch");
    }
  })
  .then((data) => {
    console.log("get method  sucessfully geted:", data);
  })
  .catch((error) => {
    console.error(error.message);
  });

//post method in javascript simple
const apiURL = "https://jsonplaceholder.typicode.com/users";

const postData = {
  id: 101,
  username: "Sample Post Title",
  email: "This is the body of the sample post.",
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
};

fetch(apiURL, options)
  .then((res) => {
    if (res.status == 200 || res.status == 201) {
      return res.json();
    } else {
      throw new Error("failed to fetch");
    }
  })
  .then((data) => {
    console.log("post method sucessfully posted", data);
  })
  .catch((error) => {
    console.error(error.message);
  });

//PUT method in javascript simple or post a method
const apiURL2 = "https://jsonplaceholder.typicode.com/users";

const postData2 = {
  id: 101,
  username: "Sample Post Title",
  email: "This is the body of the sample post.",
};

const options2 = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json: charset=UTF-8",
  },
  body: JSON.stringify(postData),
};

fetch(apiURL, options)
  .then((res) => {
    if (res.status == 200 || res.status == 201) {
      return res.json();
    } else {
      throw new Error("failed to fetch");
    }
  })
  .then((data) => {
    console.log("PUT method sucessfully putted", data);
  })
  .catch((error) => {
    console.error(error.message);
  });

//DELETE mothod in api

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "DELETE",
});
