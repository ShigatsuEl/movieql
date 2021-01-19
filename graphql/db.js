let movies = [
  { id: 0, name: "소울", score: 10 },
  { id: 1, name: "극장판 귀멸의 칼날: 무한열차편", score: 9 },
  { id: 2, name: "아이 엠 우먼", score: 8 },
  { id: 3, name: "파힘", score: 7 },
  { id: 4, name: "큰엄마의 미친봉고", score: 6 },
  { id: 5, name: "더 시크릿", score: 5 },
  { id: 6, name: "모추어리 컬렉션", score: 4 },
  { id: 7, name: "테넷", score: 3 },
  { id: 8, name: "마이 미씽 발렌타인", score: 2 },
  { id: 9, name: "나는 나를 해고하지 않는다", score: 1 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
