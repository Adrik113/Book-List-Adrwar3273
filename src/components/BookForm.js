import React, {useState} from "react";

function BookForm({ addBook}) {
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "", 
        summary: "",
        rating: "",
        status: "unread",
        dueDate: ""
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setBook({...book, [name]: value});
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        addBook(book);
        setBook({
            title: "",
            author: "",
            genre: "",
            summary: "",
            rating: "",
            status: "unread",
            dueDate: ""
        });
    };

    return ( 
        <form onSubmit={handleSumbit}>
            <input type="text" name="title" value={book.title} onChange={handleInputChange} placeholder="Book title" required />
            <input type="text" name="author" value={book.author} onChange={handleInputChange} placeholder="Author" required />
            <input type="text" name="genre" value={book.genre} onChange={handleInputChange} placeholder="Genre" required />
            <textarea name="summary" value={book.summary} onChange={handleInputChange} placeholder="Summary" required></textarea>
            <input type="text" name="rating" value={book.rating} onChange={handleInputChange} placeholder="rating" required />
            <select name="status" value={book.status} onChange={handleInputChange} ><option value="unread">Unread</option>
            <option value="reading">Currently Reading</option>
            <option value="read">Read</option>
            </select>

            {/* Due date input */}
            <input type="date" name="dueDate" value={book.dueDate} onChange={handleInputChange} required />
            <button type="submit">Add Book</button>

        </form>
    );
}

export default BookForm;