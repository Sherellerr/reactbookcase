import React from 'react';
const Book = (props) => {

  let {volumeInfo: { title, authors, description, imageLinks: {thumbnail}},
    }= props.book;


    const printAmount = () => {
      if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
        return '£' + props.book.saleInfo.listPrice.amount;
      }
      return ' Currently Unavailable'; 
    }

    const printAuthors = () => {
      if (authors.length === 1){
        return authors;
      }
      return authors.map (authors => authors + ' & ');
    }
      

        return (
          <div>
            <h2>{title}</h2>
        <p>- by {printAuthors()}</p>
            <img src= {thumbnail}/>
            <p> <i>{description}</i></p>
            <p> <b>{printAmount()}</b></p>
          </div> );

 
}
export default Book;

//imageLinks: {smallThumbnail}, saleInfo: {listPrice: { amount }