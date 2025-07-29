import './styles/global.css';
import './styles/home.css';
import './styles/library.css';

import Header from './(pages)/cmponents/Header/Header';
import Footer from './(pages)/cmponents/Footer/Footer';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Мой сайт',
    description: 'Описание',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
