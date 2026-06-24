import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-primary-500/50 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 text-sm font-medium">Përvojë E-commerce Premium</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mirë Erdhët Në{' '}
            <span className="gradient-text">Polyshop</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
            Platforma më e modernsë për blerje online me siguri, shpejtësi dhe cilësi të garantuar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produktet" className="btn-primary inline-flex items-center justify-center gap-2">
              Zbuloni Produktet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="btn-secondary">
              Mësoni Më Shumë
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mt-16 md:mt-24"
        >
          {[
            { number: '10K+', label: 'Produkte' },
            { number: '50K+', label: 'Përdorues' },
            { number: '99.9%', label: 'Satisfaksion' },
          ].map((stat) => (
            <div key={stat.label} className="glass-effect p-6 rounded-lg text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}