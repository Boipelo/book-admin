'use client'
// import books from '../../api/books.json';
import './style.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../../../../../../components/header/navbar';
import Footer from '../../../../../../components/footer/footer';

const AdminDetail = ({ params }: { params: { bookId: string } }) => {

    interface Book {
        title: string;
        author: string;
        cover: string;
        tags: string;
        price: string;
    }
      
  const [book, setBook] = useState<Book>({ title: '', author: '', cover: '', tags: '', price: '' });
  const url_base : string = "https://ed587802b8cf4496a49a79f789d36e2c/books/"

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (params.bookId) {
        const response = await fetch(`${url_base}${params.bookId}`);
        const data = await response.json();
        data.tags = data.tags.join(', ');
        setBook(data);
      }
    };

    fetchBookDetails();
  }, [params.bookId]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSave = async () => {
    const updatedBook = {
      ...book,
      tags: book.tags.split(',').map((tag: string) => tag.trim()),
    };

    const response = await fetch(`${url_base}${params.bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });

    if (response.ok) {
      console.log('Book updated successfully');
    } else {
      console.error('Failed to update book');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Title" className="input"/>
        <input type="text" name="author" value={book.author} onChange={handleChange} placeholder="Author" className="input"/>
        <input type="text" name="cover" value={book.cover} onChange={handleChange} placeholder="Cover URL" className="input"/>
        <input type="text" name="tags" value={book.tags} onChange={handleChange} placeholder="Tags (comma-separated)" className="input"/>
        <input type="text" name="price" value={book.price} onChange={handleChange} placeholder="Price" className="input"/>
        <button onClick={handleSave} className="button">Save Changes</button>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDetail;
