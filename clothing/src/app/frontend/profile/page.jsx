import React from 'react';
import styles from './profile.module.css';

const Page = () => {
    return (
        <>
            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <h1>SOKKAI</h1>
                    <div className={styles.nav}>
                        <input
                            type="text"
                            placeholder="Search"
                            className={styles.search}
                        />
                        <div className={styles.icons}>
                            <i>☰</i>
                            <i>❤</i>
                            <i>🛒</i>
                        </div>
                    </div>
                </header>

                {/* Profile Section */}
                <main className={styles.profile}>
                    <div className={styles.profileDetails}>
                        <img
                            src="/profile-pic.jpg"
                            alt="Profile"
                            className={styles.profileImage}
                        />
                        <div className={styles.profileText}>
                            <h2>Eswar Nandha A</h2>
                            <p>6369489951</p>
                            <p>eswaranand1999@gmail.com</p>
                        </div>
                        <div className={styles.editProfile}>
                            <button className={styles.editButton}>
                                Edit Profile
                            </button>
                            <button className={styles.editButton}>
                                View Address
                            </button>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <button>Orders</button>
                        <button>Cancelled</button>
                        <button>About</button>
                        <button>Contact</button>
                    </div>
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
        </>
    );
};

export default Page;
