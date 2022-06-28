import { useHistory, useParams } from "react-router-dom";
import useFetch from "./Fetch";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('http://localhost:8000/book/' + id);
  const history = useHistory();

  const handelClick=() =>{
    fetch('http://localhost:8000/book/' + book.id, {
      method: 'DELETE'
    }).then(() =>{
      history.push('/home');
    })

  }



  return (
    <div className="book-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { book && (
        <article>
          <h2>{ book.title }</h2>
          <p>Kategorija: { book.author }</p>
          <p>{ book.geners }</p>
          <p>{ book.year }</p>
          <button onClick={handelClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BookDetails;