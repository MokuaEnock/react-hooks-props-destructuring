import React from "react";
import MovieCard from "./MovieCard";

//Parent Component
function App() {
  let title = "Mad Max";
  let posterUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1OTYGz2GDC1XjA9tirh_1Rd571yE5UFIYsmZp4nACMd7CCHM";
  let genresArr = ["Action", "Adventure", "Science Fiction", "Thriller"];

  return (
    <div className="App">
      <MovieCard title={title} posterSrc={posterUrl} genres={genresArr} />
    </div>
  );
}

export default App;
