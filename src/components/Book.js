import React from 'react';
const Book = (props) => {

  let {volumeInfo: { title, authors, description},
      saleInfo,
    }= props.book;



    let amount =() =>{
      if (saleInfo.retailPrice){
        let amount = saleInfo.retailPrice.amount;
        return amount;
      }else {
        let amount = "Not Set";
        return amount;
        }
      };

  

        return (
          <div>
            <h2>{title}</h2>
            <p>- by {authors}</p>
            <p> <i>{description}</i></p>
            <p>{amount}</p>
          </div> );

 
}
export default Book;

//imageLinks: {smallThumbnail}, saleInfo: {listPrice: { amount }