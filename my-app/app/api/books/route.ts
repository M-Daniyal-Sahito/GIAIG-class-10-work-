import { NextResponse } from 'next/server';

// Sample book data (this would be replaced by a database in a real app)
let books: { id: number; title: string; author: string }[] = [];

// GET: Fetch all books
export async function GET() {
    return NextResponse.json(books);
}

// POST: Add a new book
export async function POST(request: Request) {
    const newBook = await request.json();
    books.push({ id: Date.now(), ...newBook });
    return NextResponse.json({ message: 'Book added successfully', books });
}

// PUT: Update a book by ID
export async function PUT(request: Request) {
    const updatedBook = await request.json();
    books = books.map(book => (book.id === updatedBook.id ? updatedBook : book));
    return NextResponse.json({ message: 'Book updated successfully', books });
}

// DELETE: Delete a book by ID
export async function DELETE(request: Request) {
    const { id } = await request.json();
    books = books.filter(book => book.id !== id);
    return NextResponse.json({ message: 'Book deleted successfully', books });
}
