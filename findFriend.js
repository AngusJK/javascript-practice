const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"]
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"]
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"]
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"]
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"]
  }
];

const findFriend = function(list, person, detail) {
  let result = {};
  let firstFriend = "";
  for (let x in list) {
    if (list[x]['name'] === person) {
      firstFriend = list[x]['friends'][0];
      result.name = firstFriend;
    }
  }
  for (let y in list) {
    if (list[y]['name'] === firstFriend) {
      result[`${detail}`] = list[y][`${detail}`];
      
    }
  }
  if (result["name"] !== undefined && result[`${detail}`] !== undefined) {
    console.log(result);
  } else {
    console.log("Not found");
  }
};

findFriend(contacts, "Costello", "birthday"); // => "Hardy", "hardy@hardyharhar.com"

// node findFriend.js