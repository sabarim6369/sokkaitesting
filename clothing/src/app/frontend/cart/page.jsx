import React from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.cartItems}>
        {/* Item 1 */}
        <div className={styles.item}>
          <img
            src="/track-pants-grey.jpg"
            alt="Grey Track Pants"
            className={styles.itemImage}
          />
          <div className={styles.itemDetails}>
            <h3>Grey Track Pants</h3>
            <p>Size: 34</p>
            <p>Count: 1</p>
            <p>
              <strong>₹624</strong> <span className={styles.oldPrice}>₹879</span>
            </p>
            <p className={styles.saved}>Saved ₹255</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>Move to Wishlist</button>
            <button className={styles.button}>Delete</button>
          </div>
        </div>

        {/* Item 2 */}
        <div className={styles.item}>
          <img
            src="/track-pants-black.jpg"
            alt="Black Track Pants"
            className={styles.itemImage}
          />
          <div className={styles.itemDetails}>
            <h3>Black Track Pants</h3>
            <p>Size: 34</p>
            <p>Count: 1</p>
            <p>
              <strong>₹624</strong> <span className={styles.oldPrice}>₹879</span>
            </p>
            <p className={styles.saved}>Saved ₹255</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>Move to Wishlist</button>
            <button className={styles.button}>Delete</button>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <h2>Price Details (2 Items)</h2>
        <div className={styles.priceRow}>
          <span>Total MRP:</span>
          <span>₹1248</span>
        </div>
        <div className={styles.priceRow}>
          <span>Discount:</span>
          <span>-₹414</span>
        </div>
        <div className={styles.priceRow}>
          <span>Coupon Discount:</span>
          <span>-₹200</span>
        </div>
        <div className={styles.priceRow}>
          <span>Delivery Charge:</span>
          <span>₹30</span>
        </div>
        <div className={styles.priceRowTotal}>
          <span>Grand Total:</span>
          <span>₹701</span>
        </div>
        <button className={styles.purchaseButton}>Purchase</button>
      </div>
    </div>
  );
};

export default Cart;
