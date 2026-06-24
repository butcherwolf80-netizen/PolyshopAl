import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'
import { Zap, Lock, Truck } from 'lucide-react'

export default function HomePage() {
  const featuredProducts = [
    { id: 1, emri: 'Laptop Pro 15', cmimi: 1299, imazhi: 'https://via.placeholder.com/300x300?text=Laptop', rating: 5, reviews: 120 },
    { id: 2, emri: 'Aurtikulare Wireless', cmimi: 199, imazhi: 'https://via.placeholder.com/300x300?text=Headphones', rating: 4.5, reviews: 95 },
    { id: 3, emri: 'Smartwatch Elite', cmimi: 499, imazhi: 'https://via.placeholder.com/300x300?text=Watch', rating: 4.8, reviews: 180 },
    { id: 4, emri: 'Kamera 4K', cmimi: 899, imazhi: 'https://via.placeholder.com/300x300?text=Camera', rating: 5, reviews: 220 },
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <section className="py-16 bg-dark-950 border-y border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Shpejtësia</h3>
              <p className="text-dark-400">Përvojë të shpejtë në të gjitha pajisjet tuaja</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <Lock className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Siguria</h3>
              <p className="text-dark-400">Pagesa të sigurta me enkriptim të avancuar</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-effect p-8 rounded-lg text-center"
            >
              <Truck className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dorëzim</h3>
              <p className="text-dark-400">Dorëzim i shpejtë dhe të besueshmëm</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Produktet E Zgjedhura</h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Zbuloni koleksionin më të mirë të produkteve të zgjedhura me kujdes për ju
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}