import { getMovies, getById } from "./db";

const resolver = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovies: (_, { name, score }),
  },
};

export default resolver;
