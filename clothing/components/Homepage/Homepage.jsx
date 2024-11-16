import React from 'react';
import styles from './Homepage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
      
            <header className={styles.header}>
                <div className={styles.logo}>SOKKAI</div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={styles.icons}>
                    <i>☰</i>
                    <i>❤</i>
                    <i>🛒</i>
                </div>
            </header>

            {/* Main Content */}
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <h2>FLAT 40% OFF on T-Shirts</h2>
                    <img src="/images/hero.jpg" alt="Hero Section" />
                </section>

                {/* Trending Section */}
                <section className={styles.trending}>
                    <h3>Trending Beach Shorts</h3>
                    <button className={styles.exploreButton}>Explore</button>
                    <div className={styles.trendingItems}>
                        <img src="/images/short1.jpg" alt="Short 1" />
                        <img src="/images/short2.jpg" alt="Short 2" />
                        <img src="/images/short3.jpg" alt="Short 3" />
                        <img src="/images/short4.jpg" alt="Short 4" />
                    </div>
                </section>

                {/* Accessories Section */}
                <section className={styles.accessories}>
                    <div className={styles.accessoryText}>
                        <h4>Get Gift Accessories for Purchases Over 5000 RS</h4>
                    </div>
                    <img src="/images/accessories.jpg" alt="Accessories" />
                </section>

                {/* New Arrivals Section */}
                <section className={styles.newArrivals}>
                    <h3>New Arrivals</h3>
                    <button className={styles.exploreButton}>Explore</button>
                    <div className={styles.arrivalsItems}>
                        <img src="/images/shirt1.jpg" alt="Shirt 1" />
                        <img src="/images/shirt2.jpg" alt="Shirt 2" />
                        <img src="/images/shirt3.jpg" alt="Shirt 3" />
                        <img src="/images/shirt4.jpg" alt="Shirt 4" />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>SOKKAI - Men Made Better</p>
                <div className={styles.socialIcons}>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">WhatsApp</a>
                    <a href="#">X</a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
