import React from 'react';

const BookList = (props) => {
    return(
        <div className="list">
            {
                props.books.map((book, index) => {
                    return <BookCard 
                                image={}
                                title={}
                                author={}
                                published={}
                            />
                })
            }
        </div>
    )
}

export default BookList;