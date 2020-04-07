import React from 'react';

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, index) => {
                    return <BookCard 
                                key={index}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.title}
                                author={book.authors}
                                published={book.publishedDate}
                            />
                })
            }
        </div>
    )
}

export default BookList;