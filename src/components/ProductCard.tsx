import { Link } from 'react-router-dom'
import { Star, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

interface ProductCardProps {
  id: number
  emri: string
  cmimi: number
  imazhi: string
  rating: number
  reviews: number
}

export default function ProductCard({ id, emri, cmimi, imazhi, rating, reviews }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -10 }}
      className="glass-effect rounded-xl overflow-hidden group"
    >
      <Link to={`/produktet/${id}`}>
        <div className="relative overflow-hidden h-64 bg-dark-800">
          <img
            src={imazhi}
            alt={emri}
            className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/produktet/${id}`}>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 smooth-transition line-clamp-2">
            {emri}
          </h3>
        </Link>

        <div className="flex items-center gap-2 my-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-dark-600'}`}
              />
            ))}
          </div>
          <span className="text-sm text-dark-400">({reviews})</span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold gradient-text">{cmimi.toLocaleString()} L</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg smooth-transition"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}