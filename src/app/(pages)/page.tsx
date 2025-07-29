import "../styles/home.css";
import Image from "next/image";

export default function Home() {
    return (
        <main className="home-page">
            {/* Геройская секция */}
            <section className="hero-section">
                <div className="hero-overlay" />
                <Image
                    src="/img/hero.png"
                    alt="Hero background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
                <div className="hero-content">
                    <div className="hero-text-background">
                        <h1>ТВОЯ БИБЛИОТЕКА ЗНАНИЙ — <br /> ВСЕГДА ПОД РУКОЙ</h1>
                        <p>Всё, что нужно для саморазвития — в одном месте: читайте, вдохновляйтесь, учитесь, усовершенствуйтесь.</p>
                    </div>
                </div>
            </section>


            {/* Рекомендации недели */}
            <section className="weekly-picks">
                <h2>Книги недели</h2>
                <div className="picks-grid">
                    {[
                        {
                            title: "Атомные привычки",
                            author: "Джеймс Клир",
                            image: "/img/book_1.jpg"
                        },
                        {
                            title: "Психология влияния",
                            author: "Роберт Чалдини",
                            image: "/img/book_2.jpg"
                        },
                        {
                            title: "Величайший торговец в мире",
                            author: "Ог Мандино",
                            image: "/img/book_3.jpg"
                        },
                        {
                            title: "Атомные привычки",
                            author: "Джеймс Клир",
                            image: "/img/book_1.jpg"
                        },
                        {
                            title: "Психология влияния",
                            author: "Роберт Чалдини",
                            image: "/img/book_2.jpg"
                        },
                        {
                            title: "Величайший торговец в мире",
                            author: "Ог Мандино",
                            image: "/img/book_3.jpg"
                        },
                        {
                            title: "Атомные привычки",
                            author: "Джеймс Клир",
                            image: "/img/book_1.jpg"
                        },
                        {
                            title: "Психология влияния",
                            author: "Роберт Чалдини",
                            image: "/img/book_2.jpg"
                        },
                        {
                            title: "Величайший торговец в мире",
                            author: "Ог Мандино",
                            image: "/img/book_3.jpg"
                        },
                        {
                            title: "Атомные привычки",
                            author: "Джеймс Клир",
                            image: "/img/book_1.jpg"
                        },
                        {
                            title: "Психология влияния",
                            author: "Роберт Чалдини",
                            image: "/img/book_2.jpg"
                        },
                        {
                            title: "Величайший торговец в мире",
                            author: "Ог Мандино",
                            image: "/img/book_3.jpg"
                        },
                    ].map((book, index) => (
                        <div className="pick-card" key={index}>
                            <div className="pick-image-wrapper">
                                <img src={book.image} alt={book.title} />
                            </div>
                            <div className="pick-content">
                                <h3>{book.title}</h3>
                                <p>Автор: {book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Особенность библиотеки */}
            <section className="why-us">
                <h2>Что делает нашу библиотеку особенной?</h2>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M4 19h16M4 5h16M4 12h16" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Интуитивный интерфейс</h3>
                        <p>Простой и удобный дизайн — найдите нужную книгу за секунды</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M12 5l7 7-7 7" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Чтение офлайн</h3>
                        <p>Скачивайте книги и читайте без интернета в любое время</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M12 20l-6-6h4V4h4v10h4l-6 6z" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Поддержка форматов</h3>
                        <p>Поддержка EPUB, PDF и аудиокниг — выбирайте то, что удобно вам</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12l2 2 4-4" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="10" stroke="#007bff" strokeWidth="2" />
                        </svg>
                        <h3>Персонализированные рекомендации</h3>
                        <p>Искусственный интеллект подбирает книги по вашим интересам</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M12 1v22M5 6h14M5 12h14M5 18h14" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Постоянные обновления</h3>
                        <p>Новые книги и авторы добавляются каждую неделю</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100-8 4 4 0 000 8z" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h3>Сообщество читателей</h3>
                        <p>Обменивайтесь мнениями и рекомендациями с другими пользователями</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h16v16H4z" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 9h16" stroke="#007bff" strokeWidth="2" />
                        </svg>
                        <h3>Закладки и история</h3>
                        <p>Сохраняйте любимые книги и возвращайтесь к ним в любой момент</p>
                    </div>

                    <div className="why-us-item">
                        <svg xmlns="http://www.w3.org/2000/svg" className="why-us-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <h3>Уведомления</h3>
                        <p>Будьте в курсе новинок и персональных подборок</p>
                    </div>
                </div>
            </section>

            {/* Присоединение к сообществу */}
            <section className="community-section">
                <div className="community-content">
                    <h2>Присоединяйтесь к нашему книжному сообществу</h2>
                    <p>Тысячи читателей уже находят вдохновение, учатся и развиваются каждый день вместе с нами. Хватит откладывать!</p>

                    <ul className="benefits-list">
                        <li>✔ Доступ к эксклюзивным книгам</li>
                        <li>✔ Персональные рекомендации</li>
                        <li>✔ Чтение на любом устройстве</li>
                    </ul>

                    <button className="join-btn">Стать частью сообщества</button>
                </div>

                <div className="community-image">
                    <img src="/img/community.jpg" alt="Сообщество читателей" />
                </div>
            </section>
        </main>
    );
}