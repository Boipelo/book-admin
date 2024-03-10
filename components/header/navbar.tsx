import React from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="header">
      <Link href="/" className="logo">Book Administration</Link>
      <div className="header-right">
        <Link href="/">Home</Link>
        <Link href="/pages/books">All Books</Link>
        <Link href="/pages/admin/books">Admin Books</Link>
        <Link href="/pages/admin/books/new">Add New Book</Link>
      </div>
    </div>
  );
};

export default Navbar;