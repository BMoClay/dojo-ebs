import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
  const [books, setBooks] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8000/books")
    .then(res => {
        if (!res.ok) {
            throw Error('could not fetch the data for that resource')
        }
        return res.json();
    })
    .then(data => {
        setBooks(data)
        setIsPending(false)
        setError(null)
    })
    .catch(error => {
        setIsPending(false)
        setError(error.message)
    })
  }, [])


  return (
    <div className="home">
        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div> }
       {books && <BookList books={books} title="all books" />}
    </div>
  );
};

export default Home;
