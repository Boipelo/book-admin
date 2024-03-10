'use client'
import React, { useState, FormEvent } from 'react'
import Navbar from '../../../../../../components/header/navbar';
import Footer from '../../../../../../components/footer/footer';
// import { unstable_noStore as noStore } from 'next/cache';
import './submit.css';

const BookForm = () => {
  // noStore();
  const [book, setBook] = useState({
    title: '',
    author: '',
    cover: '',
    tags: '',
    price: '',
  });

  const bookData = {
    ...book,
    tags: book.tags.split(',').map(tag => tag.trim()),
  };
  
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true);

    console.log(bookData)

    try {
      const response = await fetch('https://crudcrud.com/api/ed587802b8cf4496a49a79f789d36e2c/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Book successfully added:', result);
      setBook({ title: '', author: '', cover: '', tags: '', price: '' });
    } catch (error) {
      console.error('Failed to add the book:', error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
    <Navbar/>
    <div className="form-container">
      <form onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <input
          type="text"
          name="cover"
          value={book.cover}
          onChange={handleChange}
          placeholder="Cover URL"
          required
        />
        <input
          type="text"
          name="tags"
          value={book.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          required
        />
        <input
          type="text"
          name="price"
          value={book.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default BookForm;
