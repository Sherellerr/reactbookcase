import React from 'react';

const Book = (props) => {

  let { id, volumeInfo: { title, authors, description}, imageLinks: {smallThumbnail}, saleInfo: {listPrice: { amount }},
 } = book;

     return (
           <div>
             <h2>{props.book.volumeInfo.title}</h2>
              <p> -by {authors}</p>
              <p><i> {description} </i></p>
              <p><b>{amount}</b></p>
</div> );
}
export default Book;