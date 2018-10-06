import React from 'react';
// import { Link } from 'react-router-dom';
// import * as BooksAPI from '../BooksAPI';
import Authors from './Authors';

class Book extends React.Component {
    render() {
        const bookCover = `url("${(this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) || ""}")`;
        return (
            <li>
                <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: bookCover}}></div>
                    <div className="book-shelf-changer">
                    <select value={this.props.book.shelf || "none"} onChange={(e) => {this.props.updateBook(this.props.book, e.target.value) }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <Authors authors={this.props.book.authors} />
                </div>
            </li>
        );
    }
}

export default Book;





