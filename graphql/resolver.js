const tsuel = {
  name: "tsuEl",
  age: 20,
  gender: "female",
};

const resolver = {
  Query: {
    person: () => tsuel,
  },
};

export default resolver;
