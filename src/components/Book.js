import React from 'react';
import propTypes from 'prop-types';

const Book = (props) => {

  let {volumeInfo: { title, authors, description, imageLinks: {thumbnail}},
    }= props.book;


    const printAmount = () => {
      if (props.book.saleInfo && props.book.saleInfo.listPrice && props.book.saleInfo.listPrice.amount) {
        return '£' + props.book.saleInfo.listPrice.amount;
      }
      return ' Currently Unavailable'; 
    }

    // const printAuthors = () => {
    //   if (authors.length === 1){
    //     return authors;
    //   }
    //   return authors.map (authors => authors + ' & ');
    // }
      

        return (
          <div>
            <h2>{title}</h2>
        <p>- by {authors.length === 1 ? authors[0] : authors.join (' & ')}</p>
            <img src= {thumbnail}/>
            <p> <i>{description}</i></p>
            <p> <b>{printAmount()}</b></p>
          </div> );
}

Book.propTypes = {
  book: propTypes.shape({
    volumeInfo: propTypes.shape ({
      title: propTypes.string.isRequired,
      authors: propTypes.array.isRequired,
      description: propTypes.string.isRequired,
      imageLinks: propTypes.shape ({
        thumbnail: propTypes.string.isRequired
      })
    }),
    saleInfo: propTypes.shape ({
      listPrice: propTypes.shape ({
        amount: propTypes.number.isRequired
      }).isRequired
    })
  })
};

export default Book;

//imageLinks: {smallThumbnail}, saleInfo: {listPrice: { amount }