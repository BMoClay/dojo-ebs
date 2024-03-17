import { useParams } from 'react-router-dom'

const BookDetails = () => {
    const { urlText } = useParams()

  return (
    <div className="book-details">
        <h2>book details - { urlText }</h2>
    </div>
  ) 
};

export default BookDetails;
