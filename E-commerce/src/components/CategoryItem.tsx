import React from 'react'
import styles from "@/styles/components/CategoryItem.module.css"


const CategoryItem = ({item }) => {
  return (
    <div className={styles.Container}>
      <img className={styles.Image}  src={item.img} title={item.title} alt={item.title} />
      <div className={styles.Info}>
      <h2 className={styles.Title}>{item.title}</h2>
      <button className={styles.Button}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
