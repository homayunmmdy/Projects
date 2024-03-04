import styles from '@/styles/components/Categories.module.css'
import {categories} from "@/backend/data"
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className={styles.Container}>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}

    </div>
  )
}

export default Categories
