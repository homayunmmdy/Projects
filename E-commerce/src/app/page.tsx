import Announcement from "@/components/Announcement"
import Categories from "@/components/Categories"
import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"
import Products from "@/components/Products"
import SingleProduct from "@/components/SingleProduct"
import Slider from "@/components/Slider"

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <SingleProduct />
      <Footer />
    </div>
  )
}

export default Home