import { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])

  const allProducts = [
    { id: 1, emri: 'Laptop Pro 15', cmimi: 1299, imazhi: 'https://via.placeholder.com/300x300?text=Laptop', rating: 5, reviews: 120, kategoria: 'elektronika' },
    { id: 2, emri: 'Aurtikulare Wireless', cmimi: 199, imazhi: 'https://via.placeholder.com/300x300?text=Headphones', rating: 4.5, reviews: 95, kategoria: 'audio' },
    { id: 3, emri: 'Smartwatch Elite', cmimi: 499, imazhi: 'https://via.placeholder.com/300x300?text=Watch', rating: 4.8, reviews: 180, kategoria: 'wearable' },
    { id: 4, emri: 'Kamera 4K', cmimi: 899, imazhi: 'https://via.placeholder.com/300x300?text=Camera', rating: 5, reviews: 220, kategoria: 'kamera' },
    { id: 5, emri: 'Telefon Inteligjent', cmimi: 799, imazhi: 'https://via.placeholder.com/300x300?text=Phone', rating: 4.7, reviews: 340, kategoria: 'elektronika' },
    { id: 6, emri: 'Tabletë', cmimi: 599, imazhi: 'https://via.placeholder.com/300x300?text=Tablet', rating: 4.6, reviews: 210, kategoria: 'elektronika' },
    { id: 7, emri: 'Mikrofon Studio', cmimi: 299, imazhi: 'https://via.placeholder.com/300x300?text=Microphone', rating: 4.9, reviews: 165, kategoria: 'audio' },
    { id: 8, emri: 'Fisnik Gaming', cmimi: 349, imazhi: 'https://via.placeholder.com/300x300?text=Monitor', rating: 4.8, reviews: 280, kategoria: 'gaming' },
  ]

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.emri.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.kategoria === selectedCategory
      const matchesPrice = product.cmimi >= priceRange[0] && product.cmimi <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, priceRange])

  const categories = ['all', 'elektronika', 'audio', 'wearable', 'kamera', 'gaming']

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-8"
        >
          Produktet Tona
        </motion.h1>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-8"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-dark-500" />
            <input
              type="text"
              placeholder="Kërko produktet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>

          {/* Filters */}
          <div className="glass-effect p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary-400" />
              <h3 className="text-lg font-semibold text-white">Filtrat</h3>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">Kategoria</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg smooth-transition ${
                      selectedCategory === cat
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-dark-300 hover:bg-dark-600'
                    }`}
                  >
                    {cat === 'all' ? 'Të gjitha' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-white font-medium mb-3">Çmimi: {priceRange[0]} - {priceRange[1]} L</h4>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-dark-400 text-lg">Asnjë produkt nuk u gjet për këtë kërkesë.</p>
          </div>
        )}
      </div>
    </div>
  )
}