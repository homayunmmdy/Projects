"use client"
import { useState } from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa';
import { TbShoppingCartMinus } from 'react-icons/tb';
import styles from '@/styles/components/SingleProduct.module.css';

const SingleProduct = () => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
        <div className={styles.ImgContainer}>
          {/* Use the "next/image" component properly */}
          <Image src="/images/hat.jpg" width={300} height={400} alt="hat" />
        </div>
        <div className={styles.InfoContainer}>
          <h3 className={styles.Title}>Denim Jumpsuit</h3>
          <p className={styles.Des}>
            {/* Shorten the placeholder text for brevity */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus...
          </p>
          <span className={styles.Price}>$20</span>
          <div className={styles.FilterContainer}>
            {/* Correct usage of the select element */}
            <div className={styles.Filter}>
              <span className={styles.FilterTitle}>Color</span>
              <select>
                <option className={styles.FilterColor}>Black</option>
                <option className={styles.FilterColor}>Dark Blue</option>
                <option className={styles.FilterColor}>Gray</option>
              </select>
            </div>
            <div className={styles.Filter}>
              <span className={styles.FilterTitle}>Size</span>
              <select>
                <option className={styles.FilterColor}>XS</option>
                <option className={styles.FilterColor}>S</option>
                <option className={styles.FilterColor}>M</option>
                <option className={styles.FilterColor}>L</option>
                <option className={styles.FilterColor}>XL</option>
              </select>
            </div>
          </div>
          <div className={styles.AddContainer}>
            {/* Use appropriate semantic HTML for better accessibility */}
            <div className={styles.AmountContainer}>
              <TbShoppingCartMinus className={styles.Btn} onClick={handleDecrease} />
              <span className={styles.Amount}>{count}</span>
              <FaCartPlus className={styles.Btn} onClick={handleIncrease} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;