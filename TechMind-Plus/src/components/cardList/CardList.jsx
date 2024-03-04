import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";


const CardList = async () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
<Card />
<Card />
<Card />
<Card />
<Card />

      <Pagination />
    </div>
  );
};

export default CardList;
