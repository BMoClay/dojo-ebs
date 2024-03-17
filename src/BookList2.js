const BookList = ({books, title, handleDelete, handleFilterYear}) => {

    // const books = props.books;
    // const title = props.title

    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book) => (
            <div className="book-preview" key={book.id}>
                <img className="logos" src={book.logo} alt={book.bookTitle}/>
                {/* <h1 onClick={() => handleFilterYear(book.id)}>{book.year}</h1> */}
                <h2>{book.bookTitle} by {book.artist}</h2>
                <p>{book.size}, {book.binding}, {book.price}</p>
                <button onClick={() => handleDelete(book.id)}>delete book</button>
            </div>
           ))}
        </div>
    );
}
 
export default BookList;