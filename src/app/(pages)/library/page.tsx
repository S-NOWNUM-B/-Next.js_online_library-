'use client';

import { useState } from 'react';
import books from '../../../data/books.json';
import BookCard from '../cmponents/BookCard/BookCard';
import "../../styles/library.css";

export default function Library() {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [sort, setSort] = useState('');

    const genres = Array.from(new Set(books.map(book => book.genre).filter(Boolean)));
    const authors = Array.from(new Set(books.map(book => book.author)));
    const years = Array.from(new Set(books.map(book => book.year))).sort();

    let filteredBooks = books.filter(book =>
        (book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())) &&
        (genre === '' || book.genre === genre) &&
        (author === '' || book.author === author) &&
        (year === '' || book.year.toString() === year)
    );

    if (sort === 'asc') {
        filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'desc') {
        filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
    }

    return (
        <main className="librarySection">
            <div className="filtersContainer">
                <div className="filters">
                    <input
                        type="text"
                        placeholder="Поиск по названию или автору..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <select value={genre} onChange={e => setGenre(e.target.value)}>
                        <option value="">Все жанры</option>
                        {genres.map((g, i) => (
                            <option key={i} value={g}>{g}</option>
                        ))}
                    </select>
                    <select value={author} onChange={e => setAuthor(e.target.value)}>
                        <option value="">Все авторы</option>
                        {authors.map((a, i) => (
                            <option key={i} value={a}>{a}</option>
                        ))}
                    </select>
                    <select value={year} onChange={e => setYear(e.target.value)}>
                        <option value="">Все годы</option>
                        {years.map((y, i) => (
                            <option key={i} value={y}>{y}</option>
                        ))}
                    </select>
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="">Без сортировки</option>
                        <option value="asc">По алфавиту (А-Я)</option>
                        <option value="desc">По алфавиту (Я-А)</option>
                    </select>
                </div>
            </div>

            <div className="grid">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </main>
    );
}
