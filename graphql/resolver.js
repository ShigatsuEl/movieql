import { getMovies } from "./db";

const resolver = {
  Query: {
    getMovies: () => getMovies(),
  },
};

export default resolver;
