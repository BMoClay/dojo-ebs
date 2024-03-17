const BookList = ({ books, title }) => {

    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book) => (
            <div className="book-preview" key={book.id}>
                <img className="logos" src={book.logo} alt={book.bookTitle}/>
                {/* <h2>{book.bookTitle} by {book.artist}</h2>
                <p>{book.size}, {book.binding}, {book.price}</p> */}
            </div>
           ))}
        </div>
    );
}
 
export default BookList;