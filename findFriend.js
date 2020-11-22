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
  let notFound = "Not found";
  let result = {};
  let firstFriend = "";
  for (let x in list) {
    if (list[x]['name'] === person) {
      firstFriend = list[x]['friends'][0];
      result.name = firstFriend;
    } else {
      return notFound;
    }
  }
  for (let x in list) {
    if (list[x]['name'] === firstFriend) {
      result[`${detail}`] = list[x][`${detail}`];
      console.log(result);
    } else {
      return notFound;
    }
  }
}

findFriend(contacts, "Costello", "birthday"); // => "Hardy", "hardy@hardyharhar.com"

// node findFriend.js