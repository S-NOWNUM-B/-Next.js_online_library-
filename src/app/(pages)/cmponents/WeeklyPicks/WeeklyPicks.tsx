import books from '../../../../data/books.json';

function getRandomBooks(array: typeof books, count: number) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default function WeeklyPicks() {
    const weeklyBooks = getRandomBooks(books, 4);

    return (
        <section className="weekly-picks">
            <h2>Книги недели</h2>
            <div className="picks-grid">
                {weeklyBooks.map((book) => (
                    <div className="pick-card" key={book.id}>
                        <div className="pick-image-wrapper">
                            <img src={book.cover} alt={book.title} />
                        </div>
                        <div className="pick-content">
                            <h3>{book.title}</h3>
                            <p>Автор: {book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
