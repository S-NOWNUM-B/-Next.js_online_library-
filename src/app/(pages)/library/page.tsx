'use client';

import books from '../../../data/books.json';
import BookCard from '../cmponents/BookCard/BookCard';
import "../../styles/library.css";

export default function Library() {
    return (
        <main className="libraryWrapper">
            <h1 className="libraryTitle">Наша библиотека</h1>
            <div className="grid">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </main>
    );
}
