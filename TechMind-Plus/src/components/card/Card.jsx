import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2023.11.18</span>
          <span className={styles.category}>.CULTURE</span>
        </div>
        <Link href={`/`}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          quo asperiores facilis, commodi voluptatum nam labore vel vitae amet,
          et debitis animi, iste error ducimus!
        </p>
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
