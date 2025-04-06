import React from 'react';
import BookItem from './BookItem';

function BookList({books}){
    return (
        <div className="book-list">
            <h2>My Books</h2>
            {books.length === 0 ? (
                <p>No Books added yets</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <BookItem key={index} book={book} />
                    ))}
                </ul>
            )}
        </div>
    );
}
export default BookList;