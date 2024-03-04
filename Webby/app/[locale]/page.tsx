import Hero from '@/components/home/hero/Hero'
import Newsletter from '@/components/home/newsletter/Newsletter'
import Features from '@/components/home/features/Features'
import Pricing from '@/components/home/pricing/Pricing'

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <Newsletter />
    </main>
  )
}

export default Home
