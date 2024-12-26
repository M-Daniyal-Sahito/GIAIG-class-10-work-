'use client';

import React, { useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

export default function BooksUI() {
  const [books, setBooks] = useState<Book[]>([]); // Local state for books
  const [newBook, setNewBook] = useState({ title: '', author: '' }); // State for new book

  // Add Book
  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert('Please fill out both fields.');
      return;
    }
    const newId = books.length ? books[books.length - 1].id + 1 : 1; // Generate new ID
    const bookToAdd = { id: newId, ...newBook };
    setBooks([...books, bookToAdd]); // Add to books list
    setNewBook({ title: '', author: '' }); // Clear input fields
  };

  // Delete Book
  const deleteBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id); // Filter out deleted book
    setBooks(updatedBooks);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      {/* Add New Book Form */}
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={addBook}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Book
        </button>
      </div>
      {/* Display Books */}
      {books.length > 0 ? (
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="p-2 border">{book.id}</td>
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => deleteBook(book.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books added yet. Start adding!</p>
      )}
    </div>
  );
}
