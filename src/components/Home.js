import BookList from "./BookList";
import useFetch from "./Fetch";

const Home = () => {
  const {data, isPeding, error} = useFetch('http://localhost:8000/book');

    
  
   return (
    
      <div className="home">
        { error && <div> {error}</div>}
        { isPeding && <div> Loading...</div>}
        { data && <BookList book={data} title="Visos knygos" />}
       </div>
      );
    }
     
    export default Home;