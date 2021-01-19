export const people = [
  { id: 1, name: "tsuEl", age: 20, gender: "female" },
  { id: 2, name: "Shiga", age: 25, gender: "female" },
  { id: 3, name: "Nicolas", age: 29, gender: "male" },
  { id: 4, name: "Osung", age: 27, gender: "female" },
  { id: 5, name: "MoTTak", age: 27, gender: "male" },
  { id: 6, name: "SungH", age: 25, gender: "female" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
