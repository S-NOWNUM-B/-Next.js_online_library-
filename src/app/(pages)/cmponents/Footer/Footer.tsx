import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h4>О сайте</h4>
                        <p>Онлайн библиотека — ваш удобный источник знаний и литературы в любое время.</p>
                    </div>
                    <div className={styles.column}>
                        <h4>Навигация</h4>
                        <ul className={styles.navLinks}>
                            <li><Link href="/">Главная</Link></li>
                            <li><Link href="/story">Библиотека</Link></li>
                            <li><Link href="/authors">Авторы</Link></li>
                            <li><Link href="/about">О нас</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Контакты</h4>
                        <p>Email: mamayev.sts@gmail.com</p>
                        <p>Тел: +7 (701) 952 70 93</p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    © 2025 Online библиотека. Все права защищены.
                </div>
            </div>
        </footer>
    );
}
