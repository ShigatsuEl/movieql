import { people, getById } from "./db";

const resolver = {
  Query: {
    people: () => people,
    person: () => getById,
  },
};

export default resolver;
