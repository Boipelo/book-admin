'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './books.css';
// import books from '../../src/app/pages/api/books.json';

const Bookshelf = () => {
    interface Book {
        _id: string;
        title: string;
        author: string;
        cover: string;
        tags: string[];
        price: string;
      }

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://crudcrud.com/api/ed587802b8cf4496a49a79f789d36e2c/books');
      const data = await res.json();
      setBooks(data);
    };
    fetchData();
  }, []);

  if (!books.length) {
    return <div>Fetching Books...</div>;
}
  
  return (
    <div>
        <div className="bookshelf">
      {books?.map((book : Book) => (
        <div key={book._id} className="book">
          <img src={book.cover} alt={book.title}  className="book-cover"/>
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-tags">
            {book.tags?.map((tag : string, index : number) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <p className="book-price">€{book.price}</p>
          <Link href={`books/${book._id}`} className="view-book-btn">View Book</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Bookshelf;