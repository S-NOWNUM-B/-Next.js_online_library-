import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <Link href="/" className={styles.logoSection}>
                    <Image
                        src="/logo.png"
                        alt="Логотип библиотеки"
                        width={32}
                        height={32}
                    />
                    <span className={styles.logoText}>Online библиотека</span>
                </Link>

                <nav className={styles.navLinks}>
                    <Link href="/story">Библиотека</Link>
                    <Link href="/authors">Авторы</Link>
                    <Link href="/about">О нас</Link>
                </nav>

                <div className={styles.profileLink}>
                    <Link href="/profile">Профиль</Link>
                </div>
            </div>
        </header>
    );
}