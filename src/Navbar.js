import { Link } from 'react-router-dom'

const Navbar = ({books}) => {
    return ( 
        <div className="navbar">
            {books.map((book) => (
            <div className="links" key={book.id}>
                <Link to={`/${book.urlText}`}>
                    <img className="logos" src={book.logo} alt={book.bookTitle}/>
                </Link>
                {/* <h2>{book.bookTitle} by {book.artist}</h2>
                <p>{book.size}, {book.binding}, {book.price}</p> */}
            </div>
           ))}
            
        </div>
     );
}
 
export default Navbar;