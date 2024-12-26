'use client';

export default function BookList({ books, onDelete }: { books: { id: number; title: string; author: string }[]; onDelete: (id: number) => void }) {
    return (
        <ul className="space-y-2">
            {books.map((book) => (
                <li key={book.id} className="flex justify-between items-center">
                    <div>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                    <button onClick={() => onDelete(book.id)} className="btn">Delete</button>
                </li>
            ))}
        </ul>
    );
}
