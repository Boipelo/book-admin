'use client'
import React, { useEffect, useState } from 'react';
// import books from '../../api/books.json';
import Navbar from '../../../../../components/header/navbar';
import Footer from '../../../../../components/footer/footer';
import './style.css';

const BookDetail = ({ params }: { params: { bookId: string } }) => {
// const book = books.find(book => book._id.toString() === params.bookId);
interface Book {
  _id: string;
  title: string;
  author: string;
  cover: string;
  tags: string[];
  price: string;
}

const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const id = typeof params.bookId === 'string' ? params.bookId : '';
    if (!id) return;
  
    const fetchBookDetails = async () => {
      const response = await fetch(`https://crudcrud.com/api/ed587802b8cf4496a49a79f789d36e2c/books/${id}`);
      if (!response.ok) {
        console.error("Failed to fetch book details");
        return;
      }
      const data: Book = await response.json();
      setBook(data);
    };
  
    fetchBookDetails();
  }, [params.bookId]);

  if (!book) {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className='not-found'>Book not found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="book-image">
          <img src={book.cover} alt={`Cover of ${book.title}`} />
        </div>
        <div className="book-details">
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <div className="tags">
            {book.tags?.map((tag : string, index : number) => (
              <span key={index} className="tag">{tag}{index < book.tags.length - book.tags.length ? ', ' : ''}</span>
            ))}
          </div>
          <p>Price: €{book.price}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetail;
