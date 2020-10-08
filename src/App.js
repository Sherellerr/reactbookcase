import React, { useState } from 'react';
 import Book from "./components/Book.js";
 import data from './models/books.json';
 
 const App = (props) => {
   const [books] = useState(data);

    if (books.length === 0){
        return 'No books available';
    }

   return (
       <div>
           {books.map(book => <Book key={book.id} book={book}/>)}
       </div>
); }
export default App;