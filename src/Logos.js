import { Link } from 'react-router-dom'

const Logos = ({books}) => {
    // console.log(books[1].id)
    return ( 
        <div className="navbar">
            {books.map((book) => (
                
            <div className="links" key={book.id}>
                <Link to={`/books/${book.id}`}>
                    {/* <div className="logoDiv"> */}
                        <img className="logos" src={book.logo} alt={book.bookTitle}/>
                        {/* <h2 className="year">{book.year}</h2> */}
                    {/* </div> */}
                </Link>
            </div>
           ))}
            
        </div>
     );
}
 
export default Logos;