    'use client';
    import React, { useState,useEffect } from 'react';
    import styles from './Homepage.module.css';
    import a1 from "../../public/images/login/a3.jpg";
    import a2 from "../../public/images/login/a5.jpg";
    import a3 from "../../public/images/homepage/a2.jpg";
    import a4 from "../../public/images/homepage/a5.jpg";
    import a5 from "../../public/images/homepage/a4.png";
    import a6 from "../../public/images/cart/a1.jpg";
    import a7 from "../../public/images/cart/a2.jpg"
    import a8 from "../../public/images/cart/a3.jpg"
    import a9 from "../../public/images/cart/a4.jpg"
    import a10 from "../../public/images/cart/a5.jpg"
    import a11 from "../../public/images/cart/a6.jpg"
    import Image from 'next/image';

    const HomePage = () => {
        const [currentPair, setCurrentPair] = useState(0);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const imagePairs1 = [a1, a2, a4];
  const imagePairs = [
    [a1, a2],
    [a5, a4],
  ];

  const nextImage = () => {
    setCurrentPair((prev) => (prev + 1) % imagePairs.length);
  };
  const nextImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
};
const prevImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagePairs.length) % imagePairs.length);
};
  const prevImage = () => {
    setCurrentPair((prev) => (prev - 1 + imagePairs.length) % imagePairs.length);
  };

  // Automatic image change every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 2000);
    return () => clearInterval(interval); 
  }, []);
  useEffect(() => {
    const interval1 = setInterval(nextImage1, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval1); // Cleanup interval on component unmount
}, []);


        return (
          <div className={styles.container}>
          <header className={styles.header}>
          <h1 className={styles.heading}>
  <span className={styles['letter-s']}>S</span>
  <span className={styles['letter-o']}>O</span>
  <span className={`${styles['letter-k']} ${styles.first}`}>K</span> {/* Apply both 'letter-k' and 'first' */}
  <span className={styles['letter-k']}>K</span>
  <span className={styles['letter-a']}>A</span>
  <span className={styles['letter-i']}>I</span>
</h1>

       <div className={styles.searchBar}>
    <input type="text" placeholder="Search for products, brands, and more" />
  </div>
  <div className={styles.icons}>
    <i className={styles.icon}>☰</i>
    <i className={styles.icon}>❤</i>
    <i className={styles.icon}>🛒</i>
  </div>
</header>

            <main className={styles.main}>
              <section className={styles.hero}>
                <div className={styles.imageContainer}>
                  <div className={styles.leftText}>FLAT 40% OFF ON SHIRTS</div>
                  <div className={styles.images}>
                    {/* Left Arrow */}
                    <button
                      onClick={prevImage}
                      className={styles.arrowButtonLeft}
                    >
                      &#10094;
                    </button>

                    <div className={styles.imageWrapper}>
                      {imagePairs[currentPair].map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`Image ${currentPair}-${index}`}
                          className={`${styles.image} ${
                            styles[`image${index + 1}`]
                          }`}
                        />
                      ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                      onClick={nextImage}
                      className={styles.arrowButtonRight}
                    >
                      &#10095;
                    </button>
                  </div>
                </div>
              </section>

              {/* Other Sections */}
              <section className={styles.trendingSection}>
                <div className={styles.trendingHeader}>
                  <h3 className={styles.trendingTitle}>
                    Trending Beach Shorts
                  </h3>
                  <button className={styles.exploreButton}>Explore</button>
                </div>
                <div className={styles.trendingItemsWrapper}>
                  {/* Item containers with images and offer tag */}

                  <div className={styles.itemWrapper}>
                    <Image
                      src={a6}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a7}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a8}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a9}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a10}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a7}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  {/* Repeat for other items */}
                </div>
                <div className={styles.offerSection}>
                  <p className={styles.offerText}>Exclusive offers for you!</p>
                  <button className={styles.shopNowButton}>Shop Now</button>
                </div>
              </section>

              <section className={styles.accessories}>
                <div className={styles.accessoryText}>
                  <h4>Get Gift Accessories for Purchases Over 5000 RS</h4>
                </div>
                <div className={styles.imageContainer}>
                  <button
                    onClick={prevImage1}
                    className={styles.arrowButtonLeft1}
                  >
                    &#10094;
                  </button>

                  <div className={styles.imageWrapper}>
                    <Image
                      src={imagePairs1[currentImageIndex]}
                      alt="Accessories"
                      className={styles.accessoryImage}
                    />
                  </div>

                  <button
                    onClick={nextImage1}
                    className={styles.arrowButtonRight1}
                  >
                    &#10095;
                  </button>
                </div>
              </section>

              <section className={styles.newArrivals}>
                <div className={styles.newArrivalsHeader}>
                  <h3>New Arrivals</h3>
                  <button className={styles.exploreButton}>Explore</button>
                </div>
                <div className={styles.arrivalsItems}>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a6}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a7}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a8}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a9}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a10}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a11}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>
                  <div className={styles.itemWrapper}>
                    <Image
                      src={a1}
                      alt="Short 2"
                      className={styles.itemImage}
                    />
                    <div className={styles.offerBadge}>Up to 30% Off</div>
                  </div>

                  {/* Additional images */}
                </div>
                <div className={styles.offerText}>
                  <p>Exclusive offers for you!</p>
                  <button className={styles.offerButton}>Shop Now</button>
                </div>
              </section>
            </main>

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
