const fs = require("fs");

const dataPath = "./review.json";

// const getReviwes = () => {
//   data = fs.readFileSync(dataPath, "utf-8");
//   // parse JSON object
//   user = JSON.parse(data);

//   return user.users;
// };

// // GET USER BY ID--------------------------

// const getUser = (id) => {
//   data = fs.readFileSync(dataPath, "utf-8");
//   // parse JSON object
//   user = JSON.parse(data);

//   const userRes = user.users;
//   const userfound = userRes.filter((eachUser) => eachUser.id == id);
//   return userfound;
//   // return userRes;
// };

// INSERT NEW USER------------------------------------------

export const insertReview = (reviewDesc, productId) => {
  const newReview = {
    productId: 0,
    review: "",
  };
  const data = fs.readFileSync(dataPath, "utf-8");
  const dummy = JSON.parse(data);
  newReview.productId = productId;
  newReview.review = reviewDesc;
  dummy.review.push(newReview);

  // const id = dummy.users.length;
  // newUser.id = id;

  var json = JSON.stringify(dummy, null, 2);

  fs.writeFileSync(dataPath, json, "utf8", () => {});

  // allUsers.push(newUser);
  // return id;
};

// const updateUser = (newData) => {};

// module.exports = {
//   // getReviwes,
//   insertReview,
//   // getAllUsers,
//   // getUser,
//   // insertUser,
//   // updateUser,
// };
