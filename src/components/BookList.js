import { Link } from "react-router-dom";

const BookList = ({ book, title, }) => {

  
    return (
      <div className="book-list">
        <h2>{ title }</h2>
        {book.map(book => (
          <div className="book-preview" key={book.id} >
            <Link to={`/book/${book.id}`}>
            <h2>{ book.title }</h2>
            <p> { book.author}</p>
            <p> { book.geners}</p>
            <p> { book.year }</p>
            <p> { book.id }</p>
           {}
           </Link>
          </div>
          // 
        ))}
      </div>
    );
  }
   
  export default BookList;