import { getMovie, getMovies, getSuggestions } from "./db";

const resolver = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestionMovies: (_, { id }) => getSuggestions(id),
  },
};

export default resolver;
