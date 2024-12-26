import { NextResponse } from 'next/server';

let books: { id: number; title: string; author: string }[] = [];

// GET a specific book by ID
export async function GET(request: Request, { params }: { params: { bookId: string } }) {
    const book = books.find(book => book.id === parseInt(params.bookId));
    if (!book) return NextResponse.json({ message: 'Book not found' }, { status: 404 });
    return NextResponse.json(book);
}
