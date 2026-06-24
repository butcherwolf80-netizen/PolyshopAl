import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react'
import { useState } from 'react'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const product = {
    id: parseInt(id || '1'),
    emri: 'Laptop Pro 15 - i Avancuar',
    cmimi: 1299,
    imazhi: 'https://via.placeholder.com/600x600?text=Laptop',
    rating: 5,
    reviews: 120,
    përshkrimi: 'Laptop i fuqishëm me procesor të fundit, ekran 4K dhe baterinë të gjatë.',
    specifikimet: [
      'Procesori: Intel i7 13th Gen',
      'RAM: 16GB DDR5',
      'Ruajtja: 512GB SSD',
      'Ekrani: 15" 4K OLED',
      'GPU: RTX 4070',
      'Bateria: 10 orë',
    ],
    stoku: 25,
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image Section */}
          <div>
            <div className="glass-effect rounded-lg p-8 sticky top-24">
              <img
                src={product.imazhi}
                alt={product.emri}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">{product.emri}</h1>
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-dark-400">({product.reviews} komente)</span>
              </div>
            </div>

            {/* Price */}
            <div className="glass-effect p-6 rounded-lg">
              <div className="text-5xl font-bold gradient-text mb-2">{product.cmimi} L</div>
              <div className="flex items-center gap-2 text-green-400">
                <Check className="w-5 h-5" />
                <span>Në stok ({product.stoku} njësi)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-dark-300 text-lg">{product.përshkrimi}</p>

            {/* Specifications */}
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Specifikimet</h3>
              <ul className="space-y-2">
                {product.specifikimet.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-dark-300">
                    <Check className="w-5 h-5 text-primary-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-dark-800 rounded-lg p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-dark-700 rounded"
                  >
                    −
                  </button>
                  <span className="px-4 text-white font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-dark-700 rounded"
                  >
                    +
                  </button>
                </div>
                <span className="text-dark-400">Sasia</span>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Shto në Shportë
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-lg smooth-transition ${
                    isFavorite
                      ? 'bg-red-600 text-white'
                      : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                  }`}
                >
                  <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-dark-800 text-dark-300 rounded-lg hover:bg-dark-700 smooth-transition"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}