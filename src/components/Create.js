import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => { 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [geners, setGeners] = useState('');
  const [year, setYear] = useState('');
  const history = useHistory();
  
  const handelSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, geners, year};

    fetch('http://localhost:8000/book/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    }).then(() => {
      console.log('new book added');   
      history.push('/home');
    })

  }

  return (
    <div className="create">
      <h2>Prideti nauja knyga</h2>
      <form onSubmit={handelSubmit} >

        <label>Knygos pavadinimas:</label>
        <input 
          type="text" 
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Autorius</label>
        <input 
        type="text" 
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)} 
        />
        
        <label>Rušys:</label>
        <input
        type="text" 
        required
        value={geners}
        onChange={(e) => setGeners(e.target.value)}
        />

      <label>Metai:</label>
        <input
        type="text" 
        required
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />

      
        <button>Prideti</button>
      </form>
    </div>
  );
}
 
export default Create;