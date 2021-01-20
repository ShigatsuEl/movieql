import { getMovies } from "./db";

const resolver = {
  Query: {
    getMovies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolver;
