import styles from './BookCard.module.css';
import Image from 'next/image';

type Book = {
    id: number;
    title: string;
    author: string;
    cover: string;
};

export default function BookCard({ book }: { book: Book }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={book.cover}
                    alt={book.title}
                    width={200}
                    height={300}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>Автор: {book.author}</p>
            </div>
        </div>
    );
}
