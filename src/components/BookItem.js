import React from 'react';

function BookItem({book}) {
    const currentDate = new Date();
    const dueDate = new Date(book.dueDate);
    const isOverDue = dueDate < currentDate && book.status !== "read";

    //calculate time remaining if the due date is in the future
    const timeRemaining = dueDate > currentDate ? Math.ceil((dueDate - currentDate) / (1000 * 3600 * 24)) : 0;

    return ( 
        <div className="book-item">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong>{book.author}</p>
            <p><strong>Genre:</strong>{book.genre}</p>
            <p><strong>Summary</strong>{book.summary}</p>
            <p><strong>Rating</strong>{book.rating}</p>
            <p><strong>Status</strong>{book.status}</p>

            {isOverDue && <p style={{ color: "red"}}>This Book is overdue!</p>}

            {timeRemaining > 0 && <p>{timeRemaining} days left to return this book.</p>}
            {timeRemaining <= 0 && !isOverDue && <p>Due Today!</p>}
        </div>
    );

}
export default BookItem;